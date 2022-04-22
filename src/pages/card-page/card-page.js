import React from 'react'
import './card-page.css'

import { Faqs } from '../../components/FAQs/faqs'
import { HomeSlack } from '../../components/home-slack/home-slack.js'
import { HomeSubscribe } from '../../components/home-subscribe/home-subsc'
import { HomeInfo } from '../../components/home-info/home-info.js'
import { Footer } from '../../components/footer/footer'
import { Brief } from '../../components/brief/brief'
import { CourseMain } from '../../components/course-main/course-main'
import { PageHeader } from '../../components/page-header/page-header'

export const CardPage = () => {
    return (
        <div className="home-page">
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
        </div>
    )
}
