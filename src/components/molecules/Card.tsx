import React from 'react'
import type { CardProps } from '../../types/Card.ts'
import styles from './Card.module.scss'


const Card: React.FC<CardProps> = ( {title, children, className} ) => {
    
    const classes = [
        styles.card,
        className,
        'heading-small'
    ].filter(Boolean).join(" ")
    
    return (
        <div className={classes}>
            <h2 className={styles['card__title']}>{title}</h2>
            <div className={styles['card__content']}>{children}</div>
        </div>
    )
}

export default Card