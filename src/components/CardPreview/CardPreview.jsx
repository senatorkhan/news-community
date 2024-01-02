import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import bookmarkIcon from '../../assets/bookmark.svg'
import likeIcon from '../../assets/like.svg'
import commentIcon from '../../assets/comment.svg'
import { CardAuthor } from '../CardAuthor'
import { useAuthor } from '../../hooks'
import './styled.css'

export const CardPreview = observer(({
    id,

    title,
    poster,
    content,
    createdAt,
    authorId,

    likes,
    comments,
    bookmarks,
}) => {
    const { name, avatar } = useAuthor(authorId);

    return (
        <div className="card-preview">
            <Link className="card-preview__hitarea" to={`/post/${id}`} />

            <CardAuthor
                name={name}
                avatar={avatar}
                publishedAt={createdAt}
                text={content}
            />

            <h1 className="card-preview__title">{title}</h1>
            <img className="card-preview__poster" src={poster} alt={title} />

            <div className="card-preview__statistics">
                {/* Likes */}
                <div className="card-preview__statistics-item card-preview__statistics-item--likes">
                    <img src={likeIcon} alt="likes" />
                    <span>{likes} likes</span>
                </div>

                {/* Comments */}
                <div className="card-preview__statistics-item">
                    <img src={commentIcon} alt="comments" />
                    <span>{comments} comments</span>
                </div>

                {/* Bookmarks */}
                <div className="card-preview__statistics-item">
                    <img src={bookmarkIcon} alt="bookmarks" />
                    <span>{bookmarks} bookmarks</span>
                </div>
            </div>
        </div>
    )
});
