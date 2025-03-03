import React from "react";
class Sum extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    doSum(e)
    {
     var a = parseInt(e.target.number1.value);
     var b = parseInt(e.target.number2.value);
     var c = a+b;
     alert("Sum of two numbers is: "+c);
    }
    render()
    {
        return(
        <>
            <form onSubmit={this.doSum}>
                <input type="text" name="number1" placeholder="Enter first number" /><br/><br/>
                <input type="text" name="number2" placeholder="Enter second number" /><br/><br/>
                <button>Sum</button>
            </form>
        </>);
    }
}

export default Sum;