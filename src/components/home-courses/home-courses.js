import React from 'react'
import './home-courses.css'
import { HomeCard } from '../home-card/home-card'
import { useNavigate } from 'react-router-dom'

export const HomeCourses = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/courses')
    }

    const cards = [
        {
            id: 0,
            new: true,
            free: true,
            premium: false,
            image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hxx2bhmtmeelt0a98zos.jpg',
            header: 'Interactive rating component',
            text: 'This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!',
            level: ['1', 'Newbie'],
            stack: ['HTML', 'CSS', 'JS', 'API'],
        },
        {
            id: 1,
            new: false,
            free: false,
            premium: true,
            image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/maz79cid0jllq0js0qyi.jpg',
            header: 'Entertainment web app',
            text: 'This multi-page entertainment web app will have you working with JSON data, routing, state management, and search functionality.',
            level: ['4', 'Advanced'],
            stack: ['HTML', 'CSS', 'JS'],
        },
        {
            id: 2,
            new: false,
            free: true,
            premium: false,
            image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/sfl8uqvq75wnnr559ksp.jpg',
            header: 'Advice generator app',
            text: "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
            level: ['2', 'Junior'],
            stack: ['HTML', 'CSS', 'JS', 'API'],
        },
        {
            id: 3,
            new: false,
            free: false,
            premium: true,
            image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/mflwrbyf8kjvqvpxq9uj.jpg',
            header: 'Suite landing page',
            text: 'This small-ish HTML and CSS only landing page includes some interesting layout decisions. Perfect if you want to put your layout and responsive skills to the test!',
            level: ['2', 'Junior'],
            stack: ['HTML', 'CSS'],
        },
        {
            id: 4,
            new: false,
            free: true,
            premium: false,
            image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/qh97gysgjrzqyqlig2al.jpg',
            header: 'QR code component',
            text: "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
            level: ['1', 'Newbie'],
            stack: ['HTML', 'CSS'],
        },
        {
            id: 5,
            new: false,
            free: false,
            premium: true,
            image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/cfr9ssywcgjpcg7or928.jpg',
            header: 'Tic-Tac-Toe game',
            text: 'This classic practice project for web developers is a great exercise to complete. It will test your HTML semantics, your grid layout skill, as well as your JS logic.',
            level: ['3', 'Intermediate'],
            stack: ['HTML', 'CSS', 'JS'],
        },
    ]

    return (
        <div className="home-courses-wrap">
            <div className="home-courses-back">
                <div className="home-courses-text home-course-text-spec">
                    Latest Challenges
                </div>
                <div>
                    {cards.map((val) => (
                        <HomeCard props={val} key={val.header + val.id} />
                    ))}
                </div>
            </div>
            <div
                className="home-courses-view-all home-course-text-spec underline"
                onClick={handleClick}
            >
                View all Challenges
            </div>
        </div>
    )
}
