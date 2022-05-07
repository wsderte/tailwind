import React, { useEffect, useState } from 'react'
import './infinite-scroller.css'
import { HomeCard } from '../home-card/home-card'

export const InfiniteScroller = ({ cards, setcards, data }) => {
    const loadMoreCard = (e) => {
        // TODO  axios instead this immitation
        setcards((oldcards) => [...oldcards, ...data])
    }

    const handleScroll = (e) => {
        if (
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ) {
            loadMoreCard()
            console.log('add cards')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <div>
                {cards.map((val) => (
                    <HomeCard
                        props={val}
                        key={val.header + val.id + Math.random() * 10}
                    />
                ))}
            </div>
        </div>
    )
}
