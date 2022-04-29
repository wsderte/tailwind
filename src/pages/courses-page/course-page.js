import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import './course-page.css'

const users = [
    { id: '1', name: 'Alex' },
    { id: '2', name: 'Ivan' },
    { id: '3', name: 'Dima' },
]

export const CoursePage = () => {
    const [state, setstate] = useState(users)
    const inputRef = useRef('')

    const onClick = () => {
        setstate(
            users.filter((val) =>
                val.name
                    .toLowerCase()
                    .includes(inputRef.current.value.toLowerCase())
            )
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <input type="text" ref={inputRef} />
            <button type="button" onClick={onClick}>
                Search
            </button>
            {state.map((user) => (
                <div key={user.id + user.name}>{user.name}</div>
            ))}
        </motion.div>
    )
}
