import React from 'react'
import { Link } from 'react-router-dom'
import './not-found.css'

export const NotFound = () => {
    return (
        <div className="notfound-wrap">
            <div className="notfound-container">
                <div className="notfound-text">Oops!</div>
                <p>404 - That page cannot be found.</p>
                <p>The page you are looking for might have been removed</p>
                <p> had its name changed or is temporarily unavailable.</p>
                <Link className="notfound-link" to="/">
                    Back to the homepage
                </Link>
            </div>
        </div>
    )
}
