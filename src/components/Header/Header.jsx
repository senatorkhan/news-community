import { Link } from 'react-router-dom'
import './styled.css'
import logo from '../../assets/logo.svg'

export function Header({ className, children }) {
    return (
        <header className={`header ${className}`}>
            <Link to="/" className="header__logo">
                <img src={logo} alt="Тюмень Онлайн" />
            </Link>

            <menu className="header__actions">{children}</menu>
        </header>
    )
}
