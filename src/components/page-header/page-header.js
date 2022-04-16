import React from 'react'
import './page-header.css'

export const PageHeader = ({ text }) => {
    return (
        <div className="page-header-wrap">
            <div className="page-header-box">
                <div className="page-header-text">{text}</div>
            </div>
        </div>
    )
}
