import React from 'react'
import './challenge-button.css'

export const ChallengeButton = ({ text, icon, styled }) => {
    //  { background: backgroundChange ? backgroundChange : 'red',}
    return (
        <div className="challenge-but-wrap" style={styled}>
            <div
                className="challenge-but-text"
                style={{ color: styled?.color }}
            >
                {text} {icon}
            </div>
        </div>
    )
}
