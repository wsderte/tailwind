import React, { useState } from 'react'
import './input.css'

import { SiKeepassxc } from 'react-icons/si'
import { checkLogInputError } from '../../functions/checkLogInputError'

export const Input = ({ placeholder, type, update }) => {
    const [show, setshow] = useState(type)
    const [value, setvalue] = useState('')
    const [error, seterror] = useState(false)

    const onChange = (e) => {
        setvalue(e.target.value)
        seterror(checkLogInputError(e.target.value, placeholder))
        if (!checkLogInputError(e.target.value, placeholder)) {
            update(e.target.value)
        } else {
            update(null)
        }
    }

    const onClick = () => {
        show === type ? setshow('text') : setshow(type)
    }

    return (
        <div className="sign-input-box  margin-bottom">
            <input
                className="sign-input"
                type={show}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></input>
            {type === 'password' ? (
                <SiKeepassxc className="password-picture" onClick={onClick} />
            ) : null}
            {error ? error : null}
        </div>
    )
}
