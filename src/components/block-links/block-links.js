import React from 'react'
import './block-links.css'
import { Link } from '../link/link'

export const BlockLinks = ({ header, links }) => {
    return (
        <div className="block-links-wrap">
            <div className="block-links-header">{header}</div>
            {links.map((val) => (
                <Link name={val} key={val + 1} />
            ))}
        </div>
    )
}
