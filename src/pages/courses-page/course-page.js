import React, { useState, useRef } from 'react'
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
        <div>
            <input type="text" ref={inputRef} />
            <button type="button" onClick={onClick}>
                Search
            </button>
            {state.map((user) => (
                <div key={user.id + user.name}>{user.name}</div>
            ))}
        </div>
    )
}
