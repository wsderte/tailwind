import React from 'react'
import './about-questions.css'
import { Toggle } from './../toggle/toggle'

export const AboutQuestions = ({ text }) => {
    return (
        <div className="about-page-q-block text-center">
            <div className="about-page-question">{text}</div>
            <Toggle />
        </div>
    )
}
