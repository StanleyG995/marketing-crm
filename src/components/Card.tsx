import React from 'react'
import type { CardProps } from '../types/Card.ts'
import './Card.scss'

const Card: React.FC<CardProps> = ( {title, children} ) => {
    return (
        <div className="card">
            <h2 className="card__title">{title}</h2>
            <div className="card__content">{children}</div>
        </div>
    )
}

export default Card