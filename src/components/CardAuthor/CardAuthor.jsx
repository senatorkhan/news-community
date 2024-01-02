import { useMemo } from 'react'
import { useReadingEstimate } from '../../hooks'
import './styled.css'

export const CardAuthor = ({ name, avatar, publishedAt, text = '' }) => {
    const estimate = useReadingEstimate(text)
    const formattedDate = useMemo(() => {
        return new Date(publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })
    }, [publishedAt])

    return (
        <div className="card-author">
            <img className="card-author__avatar" src={avatar} alt={name} />

            <span className="card-author__author">{name}</span>

            <time className="card-author__published">{formattedDate}</time>

            {text && <time className="card-author__meta">{estimate}</time>}
        </div>
    )
}
