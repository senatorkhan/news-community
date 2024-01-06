import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Button, TaskCard } from '../components'
import { userStore } from '../store'

export const TasksPage = observer(() => {
    const { sortedTasks } = userStore

    return (
        <>
            {/* Tasks list */}
            {sortedTasks.map((task) => (
                <TaskCard key={task.id} {...task} />
            ))}

            {/* Create task */}
            <Link to="/tasks/create">
                <Button block>Create new task</Button>
            </Link>
        </>
    )
})
