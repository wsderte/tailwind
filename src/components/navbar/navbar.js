import React from 'react'
import { Button } from '../button/button'
import { Logo } from '../logo/logo'

import './navbar.css'

export const NavBar = () => {
    const navbarElements = [
        ['Sign Up/In', '/sign/up'],
        ['About', '/about'],
        ['Courses', '/courses'],
        ['Home', '/'],
    ]

    return (
        <div className="navbar">
            <Logo name={'Tailwinds'} />
            {navbarElements.map((element) => (
                <Button name={element[0]} link={element[1]} key={element[0]} />
            ))}
        </div>
    )
}
