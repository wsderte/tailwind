import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <h1>Sorry</h1>
            <p>That page cannot be found.</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    )
}
