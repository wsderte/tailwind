import React from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { Stack } from '../../components/home-stack/home-stack'
import { HomeCardLevel } from '../../components/home-card-level/home-card-level'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentCourse } from '../../redux/course/reducer'

import './home-card.css'

export const HomeCard = ({ props }) => {
    const dispatch = useDispatch(),
        navigate = useNavigate()

    const handleClick = () => {
        dispatch(setCurrentCourse(props))
        navigate(`/course/${props.header}`)
    }

    return (
        <div className="home-card-wrap">
            <div className="home-card">
                <div className="home-card-up" onClick={handleClick}>
                    <div className="home-card-up-tags">
                        {props.new ? (
                            <div className="home-card-up-new">
                                <BsFillBookmarkStarFill />
                                {'New'}
                            </div>
                        ) : null}
                        {props.free ? (
                            <div className="home-card-up-free">{'Free'}</div>
                        ) : null}
                        {props.premium ? (
                            <div className="home-card-up-prem">{'Premium'}</div>
                        ) : null}
                    </div>
                    <img
                        alt=""
                        className="home-card-img"
                        src={props.image}
                    ></img>
                </div>
                <div className="home-card-down">
                    <div
                        className="home-card-down-header"
                        onClick={handleClick}
                    >
                        {props.header}
                    </div>
                    <div className="home-card-down-info">
                        <div className="home-card-down-stack">
                            {props.stack.map((val) => (
                                <Stack stack={val} key={val + props.id} />
                            ))}
                        </div>
                        <div className="home-card-down-level">
                            <HomeCardLevel
                                num={props.level[0]}
                                grade={props.level[1]}
                                key={props.level[0] + props.level[1] + props.id}
                            />
                        </div>
                    </div>
                    <div className="home-card-down-text">{props.text}</div>
                </div>
            </div>
        </div>
    )
}
