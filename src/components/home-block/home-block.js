import React, { useEffect } from 'react'
import './home-block.css'

export const HomeBlock = ({ icon, header, text }) => {
    useEffect(() => {
        return () => {
            // console.log(header + " Test ");
        }
    })

    return (
        <div className="home-block-wrap">
            <div className="home-block-icon">{icon}</div>
            <div className="home-block-header">{header}</div>
            <div className="home-block-text">{text}</div>
        </div>
    )
}
