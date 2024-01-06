import './styled.css'

export function Input({ title, type, ...props }) {
    return (
        <label className="input">
            <span className="input__label">{title}</span>
            {type === 'textarea' ? (
                <textarea className="input__field" {...props} />
            ) : (
                <input className="input__field" type={type} {...props} />
            )}
        </label>
    )
}
