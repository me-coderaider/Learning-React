import React, {Component} from 'react';
import './Counter.css'
class Counter extends Component{
    constructor(props){
        super(props);

        this.state={
            counter : 0
        }
        this.clickCounter=this.clickCounter.bind(this);
    }

    clickCounter(){
        // console.log(this.state.counter)
        
        this.setState(
            (prevState) => {
            return {counter:prevState.counter + 1}
            } 
        );
    }

    render(){
        return (
            <div className='mainbox'>
                <div className='innerBox'>
                    <div className='clickCounter'>Click Counter</div>
                    <div>
                        <button className='button' onClick={this.clickCounter}>Click Here</button>
                        <div><span className='count'>{this.state.counter}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter; 