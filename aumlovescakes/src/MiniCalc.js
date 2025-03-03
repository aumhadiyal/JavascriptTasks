import React, { Component } from 'react'
class MiniCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    performOperation(e)
    {
        var operation = e.target.value;
        var expression = this.state.num1 + operation + this.state.num2;
        this.setState({result: eval(expression)});
        return

    }
    render() { 
        return (<>
        <input type="number" id="num1" onChange={(e)=> (this.setState({num1: e.target.value}))} placeholder="Enter first number" />
        <input type="number" id="num2" onChange={(e)=> (this.setState({num2: e.target.value}))} placeholder="Enter second number" />   
        <button value="+" onClick={this.performOperation.bind(this)}>Add</button>
        <button value="-" onClick={this.performOperation.bind(this)}>Subtract</button>
        <button value="*" onClick={this.performOperation.bind(this)}>Multiply</button>
        <button value="/" onClick={this.performOperation.bind(this)}>Divide</button>
        <hr/>
        {this.state.result}
        </>);
    }
}
 
export default MiniCalc;