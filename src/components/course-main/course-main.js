import React from 'react'
import './course-main.css'

import { useSelector } from 'react-redux'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { Stack } from '../home-stack/home-stack'
import { HomeCardLevel } from '../home-card-level/home-card-level'
import { ChallengeButton } from '../challenge-button/challenge-button'
import { BsArrowDownSquareFill } from 'react-icons/bs'
import { CourseAssets } from '../course-assets/course-assets'
import { BsCheckLg } from 'react-icons/bs'
import { GiIronCross } from 'react-icons/gi'

export const CourseMain = () => {
    const state = useSelector((state) => state.course.currentCourse)
    if (!state) return null

    const button = {
        text: 'Start challenge (free)',
        icon: <BsArrowDownSquareFill />,
    }

    const assets = [
        {
            text: 'Sketch and Figma design file access - Unlock with pro',
            icon: <GiIronCross />,
            iconColor: 'red',
            id: 0,
        },
        {
            text: 'JPEG design files for mobile & desktop layouts',
            icon: <BsCheckLg />,
            id: 1,
        },
        {
            text: 'Style guide for fonts, colors, etc',
            icon: <BsCheckLg />,
            id: 2,
        },
        { text: 'Optimized image assets', icon: <BsCheckLg />, id: 3 },
        {
            text: 'README file to help you get started',
            icon: <BsCheckLg />,
            id: 4,
        },
        {
            text: 'HTML file with pre-written content',
            icon: <BsCheckLg />,
            id: 5,
        },
    ]

    //  console.log('Test ' + state.header)

    return (
        <div className="course-main-wrap">
            <div className="course-main-flex">
                <div className="course-main-left">
                    {state.image ? (
                        <div className="course-left-wrap">
                            <img
                                alt=""
                                className="course-left-img"
                                src={state.image}
                            ></img>
                        </div>
                    ) : null}
                    <div className="course-left-under">
                        <div className="course-left-button">Desktop</div>
                    </div>
                </div>

                <div className="course-main-right">
                    <div className="course-card-up-tags">
                        {state.new ? (
                            <div className="home-card-up-new">
                                <BsFillBookmarkStarFill />
                                {'New'}
                            </div>
                        ) : null}
                        {state.free ? (
                            <div className="home-card-up-free">{'Free'}</div>
                        ) : null}
                        {state.premium ? (
                            <div className="home-card-up-prem">{'Premium'}</div>
                        ) : null}

                        {state.stack.map((val) => (
                            <Stack stack={val} key={val + state.id} />
                        ))}
                        <div className="course-left-under course-fix2">
                            <HomeCardLevel
                                num={state.level[0]}
                                grade={state.level[1]}
                                key={state.level[0] + state.level[1] + state.id}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="home-card-down-header">
                            {state.header}
                        </div>
                        <div className="home-card-down-text">{state.text}</div>
                    </div>
                    <div className="course-right-box">
                        <div>
                            <div className="course-right-header">
                                {'Assets Provided'}
                            </div>
                            <div className="course-flex">
                                {assets.map((val) => (
                                    <CourseAssets
                                        text={val.text}
                                        color={val.iconColor}
                                        icon={val.icon}
                                        key={val.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <ChallengeButton text={button.text} icon={button.icon} />
                </div>
            </div>
        </div>
    )
}
