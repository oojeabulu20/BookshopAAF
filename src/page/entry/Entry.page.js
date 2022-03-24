import React, { useState } from 'react'
import "./entry.style.css";


import { Login } from '../../components/login/login.comp';
import { ResetPassword } from '../../components/login/password-reset/PasswordReset';

export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formLoad, setFormLoad] = useState("login");

    const handleOnChange = e => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setEmail(value);
                break
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }

        console.log(name, value)
    };

    const handleSubmit = e => {
        e.preventDefault()
        if (!email || !password) {
            return alert("Form incomplete")
        }
        console.log(email, password)
    };

    const handleResetSubmit = e => {
        e.preventDefault()
        if (!email) {
            return alert("Enter email address")
        }
        console.log(email)
    };

    const formSwitch = formtype => {
        setFormLoad(formtype);
    }

    return (
        <div className='entry-page bg-success'>
            {formLoad === 'login' && (
                <Login handleOnChange={handleOnChange}
                    handleSubmit={handleSubmit}
                    formSwitch={formSwitch}
                    email={email}
                    pass={password} />)}

            {formLoad === "reset" && (
                <ResetPassword handleOnChange={handleOnChange}
                    handleResetSubmit={handleResetSubmit}
                    formSwitch={formSwitch}
                    email={email} />)}
        </div>
    );
};
