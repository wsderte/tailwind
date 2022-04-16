import React from 'react'
import './brief.css'

import { HeaderText } from '../header-text/header-text'
import { BoldText } from '../bold-text/bold-text'
import { ChallengeButton } from '../challenge-button/challenge-button'
import { BsArrowDownSquareFill } from 'react-icons/bs'

export const Brief = () => {
    const button = {
        text: 'Start challenge (free)',
        icon: <BsArrowDownSquareFill />,
    }

    const left = [
            'Brief',
            'Your challenge is to build out this feature illustration using HTML & CSS and get it looking as close to the design as possible.',
            'The only assets we provide in this challenge are the image of the person in the app UI and the 3 images of the dog. You need to create everything else using HTML & CSS!',
            'Your users should be able to:',
            "View the optimal layout for the component depending on their device's screen size",
            'See the chat interface animate on the initial load (optional)',
            'Want some support on the challenge?',
            ' Join our Slack community',
            ' and ask questions in the help channel.',
        ],
        right = [
            'Getting started',
            'Download the starter code',
            'Set up the project with version control (e.g. Git)',
            'Read the',
            'README.md',
            'file and have a look around the starter files',
            'Get colors, fonts etc from the',
            'style-guide.md',
            'file',
            'Set up your project/file architecture however you like',
            'Start coding!',
            'Ideas to test yourself',
            'Add loading animations for the chat app UI',
        ]

    return (
        <div className="brief-wrap">
            <HeaderText text="Challenge" key="Challenge" />
            <div className="brief-flex">
                <div className="brief-left">
                    <BoldText text={left[0]} />
                    <div className="brief-left-text">{left[1]}</div>
                    <div className="brief-left-text">{left[2]}</div>
                    <div className="brief-left-text">{left[3]}</div>
                    <ul className="brief-left-text">
                        <li>{left[4]}</li>
                        <li>{left[5]}</li>
                    </ul>
                    <div className="brief-left-text">
                        {left[6]}
                        <a className="brief-link" href="/">
                            {left[7]}
                        </a>{' '}
                        {left[8]}
                    </div>
                    <ChallengeButton text={button.text} icon={button.icon} />
                </div>

                <div className="brief-right">
                    <BoldText text={right[0]} />
                    <ol className="brief-left-text">
                        <li>{right[1]}</li>
                        <li>{right[2]}</li>
                        <li>
                            {right[3]}
                            <code className="brief-code">{right[4]}</code>
                            {right[5]}
                        </li>
                        <li>
                            {right[6]}
                            <code className="brief-code">{right[7]}</code>
                            {right[8]}
                        </li>
                        <li>{right[9]}</li>
                        <li>{right[10]}</li>
                    </ol>
                    <BoldText text={right[11]} />
                    <ul>
                        <li>{right[12]}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
