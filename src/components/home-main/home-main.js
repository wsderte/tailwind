import React from 'react'
import './home-main.css'

import { BsGithub } from 'react-icons/bs'
import { HeaderText } from '../header-text/header-text'

const text = [
    'Improve your front-end coding skills by building real projects',
    'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 329 541 developers building projects, reviewing code, and helping each other get better.',
    'How it works',
]

export const HomeMain = () => {
    return (
        <div className="home-main-wrap">
            <div className="home-main-container">
                <div className="home-main-left">
                    <div className="home-main-big-text">{text[0]}</div>
                    <div className="home-main-text">{text[1]}</div>
                    <div className="home-main-button">
                        <div className="home-main-box" onClick={() => {}}>
                            <div className="home-main-button-text text-center ">
                                {'Login wih github '}
                                <BsGithub size={25} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-main-right">
                    <div className="home-main-picture"></div>
                </div>
            </div>
            <HeaderText text={text[2]} />
        </div>
    )
}
