import React, {Component} from 'react';
import './Counter.css'
class Counter extends Component{
    constructor(props){
        super(props);

        this.state={
            counter : 0
        }
    }

    render(){
        return (
            <div>
                <button className='button'>click here</button>
                <span className='count'>0</span>
            </div>
        )
    }
}

export default Counter; 