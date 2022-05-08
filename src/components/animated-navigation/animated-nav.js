import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HomePage } from './../../pages/home-page/home-page'
import { CardPage } from './../../pages/card-page/card-page'
import { SignUp } from './../../pages/signUp-page/signUp'
import { CoursePage } from './../../pages/courses-page/course-page'
import { SignIn } from './../../pages/signIn-page/signIn'
import { AnimatePresence } from 'framer-motion'
import { AboutPage } from '../../pages/about-page/about-page'
import { NotFound } from '../../pages/not-found/not-found'

export const AnimatedNav = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/course/:header" element={<CardPage />}></Route>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/courses" element={<CoursePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/sign/up" element={<SignUp />}></Route>
                <Route path="/sign/in" element={<SignIn />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </AnimatePresence>
    )
}
