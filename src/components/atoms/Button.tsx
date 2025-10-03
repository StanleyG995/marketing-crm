import React from 'react'
import type { ButtonProps } from '../../types/Button'

const Button: React.FC<ButtonProps> = ( {children, onclick} ) => {
    return (
        <button onClick = {onclick}> { children }</button>
    )
}

export default Button

