import './BananaBank.css';

import React, { useState } from 'react';


function BananaBank() {
    const [saldo, setSaldo] = useState(0);

    const einzahlung = () => {
        let input = document.getElementById("input");
        setSaldo(saldo + Number(input.value));
        input.value = "";
    };

    const auszahlung = () => {
        let input = document.getElementById("input");
        if ((saldo - Number(input.value)) < 0) {
            alert("Leider hast du nicht genügend Geld auf dem konto");
            return;
        }

        setSaldo(saldo - Number(input.value));
        input.value = "";

    };

    return (
        <div>
            <h1 id='title'>Banana Bank</h1>
            <div className='konto'>
                <h1>Dein Girokonto</h1>
                <div className='saldo'>
                    <p className='geldbetrag'>{saldo}€</p>
                </div>
                <input placeholder='Gib einen GeldBetrag ein!' id='input'></input>
                <div><button onClick={einzahlung} className='einzahlen'>Einzahlen</button>
                    <button onClick={auszahlung} className='auszahlen'>Auszahlen</button></div>

            </div>
        </div>
    );
}

export default BananaBank;