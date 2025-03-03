import React, { useState } from 'react';

function SumHooks() {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [sum, setSum] = useState(0);

    return (
        <>
            <h1>Sum Hooks</h1>
            <input type="number" id="num1" placeholder="Enter first number" onChange={(e)=> setFirst(e.target.value)} />
            <input type="number" id="num2" placeholder="Enter second number" onChange={(e)=> setSecond(e.target.value)} />
            <button onClick={() => setSum(parseInt(first) + parseInt(second))}>Add</button>
            <p>Sum: {sum}</p>
        </>
    );
}

export default SumHooks;