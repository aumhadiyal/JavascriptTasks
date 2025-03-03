import { useState } from "react";

function SumHooksObject() {
    const [numbers,setNumbers] = useState({first:0,second:0});
    const [sum, setSum] = useState(0);

    return (
        <>
            <h1>Sum Hooks Object</h1>
            <input type="number" id="num1" placeholder="Enter first number" onChange={(e)=>(setNumbers({...numbers, first: e.target.value}))}/>
            <input type="number" id="num2" placeholder="Enter second number" onChange={(e)=>(setNumbers({...numbers, second: e.target.value}))}/>
            <button onClick={()=> (setSum(parseInt(numbers.first)+parseInt(numbers.second)))}>Add</button>
            {sum}
        </>
    );
}

export default SumHooksObject;