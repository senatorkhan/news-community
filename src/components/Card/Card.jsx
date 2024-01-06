import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { CardAuthor } from '../CardAuthor'
import Markdown from 'react-markdown'
import './styled.css'
import { Button } from '../Button'
import { useAuthor, useBookmarkPost } from '../../hooks'

export const Card = observer(
    ({
        id,

        title,
        poster,
        content,
        createdAt,
        authorId,
    }) => {
        const navigate = useNavigate()
        const { name, avatar } = useAuthor(authorId)
        const [hasBookmark, toggleBookmark] = useBookmarkPost(id)

        return (
            <div className="card">
                <img className="card__poster" src={poster} alt={title} />

                <CardAuthor
                    name={name}
                    avatar={avatar}
                    publishedAt={createdAt}
                />

                <div className="card__content">
                    <Markdown>{`# ${title}\n\n${content}`}</Markdown>
                </div>

                <div className="card__actions">
                    <Button onClick={() => navigate(-1)}>Go Back</Button>
                    <Button
                        onClick={toggleBookmark}
                        variant={hasBookmark ? 'danger' : 'primary'}
                    >
                        {hasBookmark ? 'Remove Bookmark' : 'Add Bookmark'}
                    </Button>
                </div>
            </div>
        )
    }
)
