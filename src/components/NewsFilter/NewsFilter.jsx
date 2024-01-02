import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import search from '../../assets/search.svg'
import './styled.css'
import { useEffect, useState } from 'react'

export const NewsFilter = observer(({ className }) => {
    const [searchOpened, setSearchOpened] = useState(false)

    useEffect(() => {
        if (!searchOpened) {
            return
        }

        const eventListener = (e) => {
            if (e.target.closest('.news-search')) {
                return
            }

            setSearchOpened(false)
        }

        document.addEventListener('click', eventListener)
        return () => document.removeEventListener('click', eventListener)
    }, [searchOpened])

    const openSearch = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setSearchOpened(true)
    }

    return (
        <div className={`news-filter ${className}`}>
            <div className="news-filter__actions"></div>
            <div className="news-filter__filters">
                <span className="news-filter__action" onClick={openSearch}>
                    <img
                        src={search}
                        alt="Search"
                        className="news-filter__action-icon"
                    />
                </span>
                <Link to="/popular" className="news-filter__link">
                    Popular
                </Link>
                <Link to="/upvoted" className="news-filter__link">
                    Upvoted
                </Link>
                <Link to="/discussed" className="news-filter__link">
                    Discussed
                </Link>
                <Link
                    to="/recent"
                    className="news-filter__link news-filter__link--last"
                >
                    Recent
                </Link>
                <Link
                    to="/most-visited"
                    className="news-filter__link news-filter__link--separated"
                >
                    Show most visited sites
                </Link>
            </div>
            {searchOpened && (
                <div className="news-search">
                    <label className="news-search__inner">
                        <img
                            src={search}
                            alt="Search"
                            className="news-search__icon"
                        />
                        <input
                            className="news-search__input"
                            type="text"
                            placeholder="Search"
                            autoFocus
                        />
                    </label>
                </div>
            )}
        </div>
    )
})
