import { makeObservable, observable, flow } from "mobx"

export class UserStore {
    user;
    bookmarks;
    tasks;

    constructor() {
        makeObservable(this, {
            user: observable,
            bookmarks: observable,
            tasks: observable,

            fetch: flow
        })

        this.user = null;
        this.bookmarks = [];
        this.tasks = [];

        this.fetch();
    }

    *fetch() {
        const response = yield fetch('/api/user.json');
        const { bookmarks, tasks, ...user } = yield response.json();

        this.bookmarks = bookmarks;
        this.tasks = tasks;
        this.user = user;
    }
}