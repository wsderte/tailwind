import React, { useEffect } from 'react'
import './card-page.css'

import { Faqs } from '../../components/FAQs/faqs'
import { HomeSlack } from '../../components/home-slack/home-slack.js'
import { HomeSubscribe } from '../../components/home-subscribe/home-subsc'
import { HomeInfo } from '../../components/home-info/home-info.js'
import { Footer } from '../../components/footer/footer'
import { Brief } from '../../components/brief/brief'
import { CourseMain } from '../../components/course-main/course-main'
import { PageHeader } from '../../components/page-header/page-header'
import { motion } from 'framer-motion'

export const CardPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="home-page"
        >
            <div className="card-page-wrap">
                <div className="home-page-bottom">
                    <PageHeader text={'Challenge'} />
                    <CourseMain />
                    <Brief />
                    <Faqs />
                    <HomeSlack />
                    <HomeSubscribe />
                    <HomeInfo />
                    <Footer />
                </div>
            </div>
        </motion.div>
    )
}
