import { useNavigate } from 'react-router-dom'
import { useCallback, useRef } from 'react'
import { Button, Input } from '../components'
import { userStore } from '../store'

const DEFAULT_NAME = 'No title'
const DEFAULT_DESCRIPTION = 'No description'

export function CreateTaskPage() {
    const navigate = useNavigate()
    const form = useRef(null)

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()

            /** Parse form data */
            const data = new FormData(form.current)
            let title = DEFAULT_NAME
            let description = DEFAULT_DESCRIPTION
            let date = new Date().toISOString()

            for (const [name, inputValue] of data) {
                try {
                    switch (name) {
                        case 'title':
                            title = inputValue?.trim() || DEFAULT_NAME
                            break
                        case 'description':
                            description =
                                inputValue?.trim() || DEFAULT_DESCRIPTION
                            break
                        case 'date':
                            if (inputValue) {
                                date = new Date(inputValue).toISOString()
                            }
                            break
                    }
                } catch (reason) {
                    console.log("Can't parse value", reason?.message)
                }
            }

            /** Add task to storage */
            userStore.createTask(title, description, date)

            /** Redirect */
            navigate('/tasks')
        },
        [form, navigate]
    )

    return (
        <form onSubmit={onSubmit} ref={form}>
            <Input title="Title" placeholder="Task name" name="title" />
            <Input title="Description" name="description" placeholder="Task Description (markdown)" type="textarea" />
            <Input title="Date" name="date" type="datetime-local" />
            <Button type="submit" block>
                Create task
            </Button>
        </form>
    )
}
