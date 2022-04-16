import React from 'react'
import './input.css'

export const Input = ({ placeholder }) => {
    return (
        <input
            className="sign-input margin-bottom"
            type="text"
            placeholder={placeholder}
        ></input>
    )
}
