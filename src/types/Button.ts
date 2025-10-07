export type ButtonProps = {
    children: React.ReactNode
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void

    variant?: 'base' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success'
    size?: 's' | 'm' | 'l'
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    className?: string

    disabled?: boolean
    type?: 'submit' | 'button' | 'reset'

    outline?: boolean
}