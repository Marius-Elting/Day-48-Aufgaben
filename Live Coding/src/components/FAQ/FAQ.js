import React, { useState } from 'react';
import './FAQ.css';



function FAQ() {
    const [showanswer, setanswer] = useState("none");
    const [buttonInner, setButtonInner] = useState("+");

    function activeAnswer() {
        showanswer === "none" ? setanswer("inline-block") : setanswer("none");
        buttonInner === "+" ? setButtonInner("-") : setButtonInner("+");
    }
    return (
        <div className="wrapperDiv">
            <div className='quest'><span>Why is React Great?</span><button onClick={activeAnswer} className="button">{buttonInner}</button></div>
            <div className="answer" style={{ display: showanswer }}><span>Krasse Lernkurve</span></div>
        </div>
    );
}

export default FAQ;