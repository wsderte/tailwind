import React from 'react'
import './about-page.css'

export const AboutPage = () => {
    return (
        <div className="about-page-wrap">
            <div className="about-page-container">
                <div className="about-page-square">
                    <div className="about-page-bar"></div>
                    <div className="about-page-main">
                        <header>About</header>
                        <div className="about-page-notation"></div>
                        <div className="about-page-question"></div>
                        <div className="about-page-answer"></div>
                    </div>
                    <div className="about-page-next"></div>
                </div>
            </div>
        </div>
    )
}
