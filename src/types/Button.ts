export type ButtonProps = {
    children: React.ReactNode
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void

    variant?: 'primary' | 'secondary' | 'danger'
    size?: 's' | 'm' | 'l'
    icon?: React.ReactNode
    className?: string

    disabled?: boolean
    type?: 'submit' | 'button' | 'reset'
}