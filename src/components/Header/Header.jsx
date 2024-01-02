import { useState } from 'react'
import './styled.css'
import logo from '../../assets/logo.svg';

export function Header({ className, children }) {

  return (
    <header className={`header ${className}`}>
        <a href="" className="header__logo">
          <img src={logo} alt="Тюмень Онлайн" />
        </a>

        <menu className="header__actions">
          {children}
        </menu>
    </header>
  )
}
