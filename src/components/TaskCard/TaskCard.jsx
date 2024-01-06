import Markdown from 'react-markdown'
import './styled.css'
import { Button } from '../Button'
import { userStore } from '../../store'
import { useCallback, useMemo } from 'react'

export function TaskCard({ id, date, name, description }) {
    const removeTask = useCallback(() => {
        userStore.removeTask(id)
    }, [id])

    const formattedDate = useMemo(() => {
        return new Date(date).toLocaleString()
    }, [date])

    return (
        <div className="task-card">
            <div className="task-card__header">
                <div className="task-card__meta">
                    <div className="task-card__name">{name}</div>
                    <div className="task-card__date">{formattedDate}</div>
                </div>
                <Button onClick={removeTask} variant="danger">
                    Remove
                </Button>
            </div>
            <div className="task-card__description">
                <Markdown>{description}</Markdown>
            </div>
        </div>
    )
}
