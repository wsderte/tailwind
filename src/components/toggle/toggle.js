import React from 'react'
import './toggle.css'

export const Toggle = () => {
    return (
        <label className="toggle-label">
            <div className="toggle">
                <input
                    className="toggle-state"
                    type="checkbox"
                    name="check"
                    value="check"
                />
                <div className="indicator"></div>
            </div>
        </label>
    )
}
