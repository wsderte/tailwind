import React from 'react'
import './about-firstslide.css'
import { AiFillForward } from 'react-icons/ai'
import { AboutQuestions } from './../about-questions/about-questions'
import { ProgressBar } from '../progress-bar/progress-bar'

const questions = [
    'Do you have a website already?',
    'Do you have a budjet allocated?',
]

export const AboutFirstSlide = ({ prev, next, slide }) => {
    return (
        <div className="about-page-wrap">
            <div className="about-page-container">
                <div className="about-page-square">
                    <div className="about-page-bar">
                        <ProgressBar
                            count={slide.count}
                            maxCount={slide.maxCount}
                        />
                    </div>
                    <div className="about-page-main">
                        <div className="about-page-header text-center">
                            {'Overview'}
                        </div>
                        <div className="about-page-notation text-center">
                            {
                                'Please answer the questions below so we can get a better understanding of your general requirements'
                            }
                        </div>

                        {questions.map((q, i) => (
                            <AboutQuestions text={q} key={q + i} />
                        ))}

                        <div className="about-page-buttons">
                            <div className="about-page-left">
                                <button
                                    className="about-previous-button about-button"
                                    onClick={() => prev()}
                                >
                                    <AiFillForward size={25} />
                                </button>
                            </div>
                            <div className="about-page-right">
                                <button
                                    className="about-button"
                                    onClick={() => next()}
                                >
                                    <AiFillForward size={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
