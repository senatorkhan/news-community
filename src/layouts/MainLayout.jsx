import { Outlet, useLocation } from 'react-router-dom'
import { Header, UserPanel, NewsFilter } from '../components'
import './styled.css'
import { useLayoutEffect } from 'react'

export function MainLayout() {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 0)
    }, [pathname])

    return (
        <main className="layout">
            <Header className="layout__header">
                <UserPanel />
            </Header>

            <NewsFilter className="layout__menu" />

            <section className="layout__content">
                <Outlet />
            </section>
        </main>
    )
}
