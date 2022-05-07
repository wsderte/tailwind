import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import './course-page.css'
import { InfiniteScroller } from '../../components/infinite-scroller/infinite-scroller'

const data = [
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

export const CoursePage = () => {
    const [cards, setcards] = useState(data)
    const inputRef = useRef('')

    const onClick = () => {
        // TODO fix filter on null case +-
        if (inputRef.current.value) {
            setcards(
                cards.filter((val) =>
                    val.header
                        .toLowerCase()
                        .includes(inputRef.current.value.toLowerCase())
                )
            )
        } else {
            setcards(data)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="course-page-wrap"
        >
            <div className="course-page-filter">
                <input
                    type="text"
                    ref={inputRef}
                    className="course-page-input"
                />
                <button type="button" onClick={onClick}>
                    Search
                </button>
            </div>
            <InfiniteScroller cards={cards} setcards={setcards} data={data} />
        </motion.div>
    )
}
