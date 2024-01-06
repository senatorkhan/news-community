import { makeObservable, observable, flow, computed, action } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

const AVATAR_PLACEHOLDER = 'https://via.placeholder.com/128'

export class UserStore {
    user
    bookmarks
    tasks
    loaded = false

    constructor() {
        makeObservable(this, {
            user: observable,
            bookmarks: observable,
            tasks: observable,
            tasksCount: computed,
            sortedTasks: computed,
            userName: computed,

            toggleBookmark: action,
            removeTask: action,
            createTask: action,

            fetch: flow,
        })

        this.user = null
        this.bookmarks = []
        this.tasks = []
    }

    get tasksCount() {
        return this.tasks.length
    }

    get sortedTasks() {
        return [...this.tasks].sort(
            (a, b) => +new Date(a.date) - +new Date(b.date)
        )
    }

    get avatarUri() {
        return this.user?.avatar || AVATAR_PLACEHOLDER
    }

    get userName() {
        return this.user?.name || 'Guest'
    }

    hasBookmark(postId) {
        return this.bookmarks.findIndex(({ id }) => id === postId) !== -1
    }

    toggleBookmark(postId) {
        const index = this.bookmarks.findIndex(({ id }) => id === postId)

        if (index === -1) {
            this.bookmarks.push({ id: postId })
        } else {
            this.bookmarks.splice(index, 1)
        }
    }

    removeTask(taskId) {
        const index = this.tasks.findIndex(({ id }) => id === taskId)

        if (index !== -1) {
            this.tasks.splice(index, 1)
        }
    }

    createTask(name, description, date) {
        this.tasks.push({
            id: uuidv4(),
            date,
            name,
            description,
        })
    }

    *fetch() {
        const response = yield fetch('/api/user.json')
        const { bookmarks, tasks, ...user } = yield response.json()

        this.bookmarks = bookmarks
        this.tasks = tasks
        this.user = user
        this.loaded = true
    }
}
