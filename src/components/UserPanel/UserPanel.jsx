import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import bookmark from '../../assets/bookmark.svg'
import './styled.css'
import { userStore } from '../../store'

export const UserPanel = observer(({ className }) => {
    const { tasksCount, avatarUri, userName } = userStore

    return (
        <div className={`user-panel ${className}`}>
            {/* Bookmarks */}
            <Link to="/bookmarks" className="user-panel-icon">
                <img src={bookmark} className="user-panel-icon__inner" />
            </Link>

            {/* Tasks + Avatar */}
            <div className="user-panel-button">
                <Link to="/tasks" className="user-panel-button__hitarea" />
                <span className="user-panel-button__inner">{tasksCount}</span>
                <img
                    src={avatarUri}
                    alt={userName}
                    className="user-panel-button__avatar"
                />
            </div>
        </div>
    )
})
