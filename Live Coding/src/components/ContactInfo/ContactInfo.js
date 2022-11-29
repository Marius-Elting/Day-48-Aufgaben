import './ContactInfo.css';
import React, { useState } from 'react';


const ContactInfo = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [EMail, setEMail] = useState("");


        // alle der nachfolgenden Möglichkeiten funktionieren :)
    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameInput = e => {
        setLastName(e.target.value);
    };

    const handleEMailInput = e => setEMail(e.target.value);


    return (
        <div>
            <div>
                <input onKeyDown={handleFirstNameInput} type="text"></input>
                <input onKeyDown={handleLastNameInput} type="text"></input>
                <input onKeyDown={handleEMailInput} type="text"></input>
            </div>
            <div>
                <p>Vorname: {firstName}</p>
                <p>Nachname: {lastName}</p>
                <p>E-Mail: {EMail}</p>
            </div>
        </div >
    );
};

export default ContactInfo;