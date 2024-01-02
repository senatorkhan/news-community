import './styled.css'
import { Outlet } from 'react-router-dom'
import { Header, UserPanel, NewsFilter } from '../components'

export function MainLayout() {
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
