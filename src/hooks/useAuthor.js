import { postsStore } from '../store'

export function useAuthor(authorId) {
    return postsStore.authors[authorId]
}
