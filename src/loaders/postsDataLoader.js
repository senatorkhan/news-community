import { postsStore, userStore } from '../store'

export async function postsDataLoader(sort) {
    if (!postsStore.loaded) {
        await postsStore.fetch()
    }

    switch (sort) {
        case 'discussed':
            return postsStore.discussed
        case 'upvoted':
            return postsStore.upvoted
        case 'popular':
            return postsStore.popular
        case 'most-visited':
            return postsStore.mostVisited
        case 'bookmarks':
            return userStore.bookmarks.map(({ id }) => postsStore.items[id])
        default:
            return postsStore.recent
    }
}
