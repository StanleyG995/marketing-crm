import React from 'react'
import type { ButtonProps } from '../../types/Button'

const Button: React.FC<ButtonProps> = ( {children, onclick, className} ) => {
    return (
        <button className = {className} onClick = {onclick}> { children }</button>
    )
}

export default Button

