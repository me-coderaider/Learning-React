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
        
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render(){
        return (
            <div>
                <button className='button' onClick={this.clickCounter}>Click Here</button>
                <span className='count'>{this.state.counter}</span>
            </div>
        )
    }
}

export default Counter; 