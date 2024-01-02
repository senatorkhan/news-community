import { makeObservable, observable, computed, flow } from "mobx"

export class PostsStore {
    items;
    authors;

    constructor() {
        makeObservable(this, {
            items: observable,
            authors: observable,

            list: computed,
            popular: computed,
            upvoted: computed,
            discussed: computed,
            recent: computed,

            fetch: flow
        })

        this.items = {};
        this.authors = {};

        this.fetch();
    }

    get list() {
        return Object.values(this.items);
    }

    get popular() {
        return this.list.sort((a, b) => b.bookmarks - a.bookmarks);
    }

    get upvoted() {
        return this.list.sort((a, b) => b.likes - a.likes);
    }

    get discussed() {
        return this.list.sort((a, b) => b.comments - a.comments);
    }

    get recent() {
        return this.list.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    }

    *fetch() {
        let nextPage = 0;

        while (nextPage !== null) {
            const response = yield fetch(`/api/posts/${nextPage}.json`);
            const { items, authors, ...data } = yield response.json();

            // Fill items
            Object.assign(this.items, items);

            // Fill authors
            Object.assign(this.authors, authors);

            nextPage = data.nextPage;
        }
    }
}