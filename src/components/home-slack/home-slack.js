import React from 'react'
import './home-slack.css'
import { SiSlack } from 'react-icons/si'
import { EmailBox } from '../email-box/email-box'

export const HomeSlack = () => {
    // <img src="https://www.frontendmentor.io/static/images/illustration-desk.svg"></img>

    return (
        <div className="home-slack-wrap">
            <div className="home-slack-back">
                <div className="home-slack-logo">
                    <SiSlack size={40} /> slack
                </div>
                <div className="home-slack-header">
                    Join our Slack community
                </div>
                <div className="home-slack-text">
                    Join over 100 000 people taking the challenges, talking
                    about their code, helping each other, and chatting about all
                    things front-end!
                </div>
                <EmailBox name="Request invite" key="wadawdawda44" />
            </div>
        </div>
    )
}
