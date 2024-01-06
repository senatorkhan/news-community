import { userStore } from '../store'

export function useBookmarkPost(postId) {
    const hasPost = userStore.hasBookmark(postId)
    const togglePost = () => userStore.toggleBookmark(postId)

    return [hasPost, togglePost]
}
