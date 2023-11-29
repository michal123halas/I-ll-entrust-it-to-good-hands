import React, {useState} from 'react';

const Aa = () => {
    const [cal , setcal] =  useState(1)
    const calculate =()=>{
        setcal(prevState => cal + 1)
    }
    return (
        <div>
            <h1>{cal}</h1>
            <button onClick={calculate}>CLick!!</button>
        </div>
    );
};

export default Aa;