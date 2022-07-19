import React, { useMemo } from 'react'
import './home-section.css'

import { GrStakeholder } from 'react-icons/gr'
import { VscFeedback } from 'react-icons/vsc'
import { GiSubmarineMissile } from 'react-icons/gi'

import { HomeBlock } from '../home-block/home-block.js'

export const HomeSection = () => {
    const section = useMemo(
        () => [
            {
                icon: <GrStakeholder size="80px" />,
                text: 'Have a look through our collection of web designs. Pick one that you feel will be a nice challenge for you at this stage.',
                header: 'Choose your challenge',
            },
            {
                icon: <GiSubmarineMissile size="80px" />,
                text: 'Post your solution on the platform for everyone to see and get feedback on your code from other developers in the community.',
                header: 'Submit your solution',
            },
            {
                icon: <VscFeedback size="80px" />,
                text: "Thinking critically about other people's code is a crucial skill. Help others while deepening your own knowledge by giving feedback on solutions.",
                header: 'Give others feedback',
            },
        ],
        []
    )

    return (
        <div className="sections-wrap">
            {section.map((val) => (
                <HomeBlock
                    icon={val.icon}
                    text={val.text}
                    header={val.header}
                    key={val.text}
                />
            ))}
        </div>
    )
}
