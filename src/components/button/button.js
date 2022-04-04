import React from 'react'
import { useNavigate } from 'react-router-dom'
import './button.css'

export const Button = ({ name, link }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(link)
    }

    return (
        <div className="box" onClick={handleClick}>
            <div className="text">{name}</div>
        </div>
    )
}

