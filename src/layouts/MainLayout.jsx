import { useState } from 'react'
import './styled.css'
import { Header } from '../components'

export function MainLayout({ children }) {

  return (
    <main className="layout">
        <Header className="layout__header">

        </Header>

        <menu className="layout__menu">
            
        </menu>

        <section className="layout__content">
            {children}
        </section>
    </main>
  )
}
