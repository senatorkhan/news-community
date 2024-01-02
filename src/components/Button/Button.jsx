import './styled.css'

export function Button({
    children,
    variant = 'primary',
    block = false,
    className,
    ...props
}) {
    return (
        <button
            className={`button button--${variant} button--${
                block ? 'block' : 'inline'
            } ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
