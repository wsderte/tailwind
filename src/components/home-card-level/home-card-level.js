import React from 'react'
import './home-card-level.css'

export const HomeCardLevel = ({ num, grade }) => {
    let colorObj = {
        Newbie: 'rgb(106, 190, 205)',
        Junior: 'rgb(170, 215, 66)',
        Intermediate: 'teal',
        Advanced: 'rgb(244, 137, 37)',
    }
    let currentColor = colorObj[grade]
    return (
        <>
            <div
                className="home-card-down-num"
                style={{ background: currentColor }}
            >
                {num}
            </div>
            <div
                className="home-card-down-grade"
                style={{ color: currentColor }}
            >
                {grade}
            </div>
        </>
    )
}
