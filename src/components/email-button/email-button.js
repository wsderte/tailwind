import React from 'react'
import './email-button.css'

export const EmailButton = React.memo(({ name, onClick }) => {
    return (
        <div className="email-button" onClick={onClick}>
            {name}
        </div>
    )
})
