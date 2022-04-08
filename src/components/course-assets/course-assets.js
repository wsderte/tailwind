import React from 'react'
import './course-assets.css'

export const CourseAssets = ({ text, icon, color }) => {
    return (
        <div className="assets-flex">
            <div
                className="assets-icon"
                style={{ color: color ? color : 'rgb(126, 200, 56)' }}
            >
                {icon}
            </div>
            <div className="assets-text">{text}</div>
        </div>
    )
}
