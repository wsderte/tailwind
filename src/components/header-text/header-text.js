import React from 'react'
import './header-text.css'

export const HeaderText = React.memo(({ text }) => {
    return <div className="header-text">{text}</div>
})
