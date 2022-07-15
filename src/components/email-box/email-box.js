import React, { useState } from 'react'
import './email-box.css'

import { EmailButton } from '../email-button/email-button'

export const EmailBox = ({ name }) => {
    const [email, setEmail] = useState('')
    const sendEmailHandler = async (e) => {
        e.preventDefault()
        if (email.includes('@') && email.includes('.') && email.length > 4) {
            console.log('send Post', email)
            await fetch('http://localhost:8080/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
        }
    }

    return (
        <>
            <div className="email-box">
                <input
                    className="email-box-input"
                    type="email"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <EmailButton name={name} onClick={sendEmailHandler} />
            </div>
        </>
    )
}
