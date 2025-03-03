import React from 'react'
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter:0,
            errmsg:""
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
            </>
        );
    }
}
 
export default Counter;