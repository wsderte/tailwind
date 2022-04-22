import React from 'react'
import './email-box.css'

import { EmailButton } from '../email-button/email-button'

export const EmailBox = ({ name }) => {
    return (
        <>
            <div className="email-box">
                <input
                    className="email-box-input"
                    type="email"
                    placeholder="email@gmail.com"
                ></input>
                <EmailButton name={name} />
            </div>
        </>
    )
}
