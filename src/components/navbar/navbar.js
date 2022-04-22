import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../button/button'
import { Logo } from '../logo/logo'

import './navbar.css'

export const NavBar = () => {
    const authorizedStatus = useSelector((state) => state.user.authorizedStatus)
    const user = useSelector((state) => state.user.currentUser)

    const navbarElements = [
        [authorizedStatus ? user.name : 'Sign Up/In', '/sign/up'],
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
