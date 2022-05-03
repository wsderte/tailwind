import React from 'react'
import './progress-bar.css'

export const ProgressBar = ({ count, maxCount }) => {
    let progress = (count / maxCount) * 100 || 0

    return (
        <div className="progress-bar-wrap">
            <div className="progress-bar-container">
                <div
                    className="progress-bar-line"
                    style={{ width: progress + '%' }}
                >
                    <div className="progress-bar-circle">
                        {count + '/' + maxCount}
                    </div>
                </div>
            </div>
        </div>
    )
}
