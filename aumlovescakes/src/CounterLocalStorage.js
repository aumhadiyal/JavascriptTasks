import React from 'react'
class CounterLocalStorage extends React.Component {
    constructor(props) {
        super(props);
        const counter = localStorage.getItem('counter');
        if (counter === null) {
            localStorage.setItem('counter', 0);
            this.state = { counter: 0, errmsg: "" };
        } else {
            this.state = { counter: parseInt(counter), errmsg: "" };
        }
    }
    increment()
    {
        if(this.state.counter>=10)
        {
            this.setState({errmsg:"Counter is at max value"});
            return
        }
        else
        {
            this.setState({
                counter:this.state.counter+1,
                errmsg:""
            })
            localStorage.setItem('counter', this.state.counter + 1);
        }
    }
    decrement()
    {    
        if(this.state.counter<=0)
        {
            this.setState({errmsg:"Counter is at min value"});
            return
        }
        else
        { 
            this.setState({
                counter:this.state.counter-1,
                errmsg:""
            })
            localStorage.setItem('counter', this.state.counter - 1);
        }
    }
    render() { 
        return (  
            <>
                <h1>Counter</h1>
                <hr/>
                <h3>{this.state.counter}</h3>
                <h3 style={{color:'red'}}>{this.state.errmsg}</h3>
                <hr/>
                <input type="button" value="+" onClick={this.increment.bind(this)}/>
                <input type="button" value="-" onClick={this.decrement.bind(this)}/>
            </>);
    }
}
 
export default  CounterLocalStorage;