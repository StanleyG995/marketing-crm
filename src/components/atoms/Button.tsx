import React from 'react'
import type { ButtonProps } from '../../types/Button'
import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ( {children, onclick, className, variant = 'base', size = 'm', icon} ) => {
    
    const classes = [
        styles.base,
        styles[variant],
        styles[size],
        className
        
    ].filter(Boolean).join(" ")

    return (
        <button 
            className = {classes} 
            onClick = {onclick}
            > 
                { icon }
                { children }        
        </button>
    )
}

export default Button

