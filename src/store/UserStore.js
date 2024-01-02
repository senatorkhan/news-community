import { makeObservable, observable, flow, computed, action } from 'mobx'

const AVATAR_PLACEHOLDER = 'https://via.placeholder.com/128'

export class UserStore {
    user
    bookmarks
    tasks

    constructor() {
        makeObservable(this, {
            user: observable,
            bookmarks: observable,
            tasks: observable,
            tasksCount: computed,
            userName: computed,

            toggleBookmark: action,

            fetch: flow,
        })

        this.user = null
        this.bookmarks = []
        this.tasks = []
    }

    get tasksCount() {
        return this.tasks.length
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

    *fetch() {
        const response = yield fetch('/api/user.json')
        const { bookmarks, tasks, ...user } = yield response.json()

        this.bookmarks = bookmarks
        this.tasks = tasks
        this.user = user
    }
}
