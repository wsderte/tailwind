import React from 'react'
import './email-button.css'

export const EmailButton = ({ name, onClick }) => {
    return (
        <div className="email-button" onClick={onClick}>
            {name}
        </div>
    )
}
