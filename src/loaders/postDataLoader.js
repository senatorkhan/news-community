import { postsStore } from '../store'
import { postsDataLoader } from './postsDataLoader'

export async function postDataLoader(id) {
    if (!postsStore.loaded) {
        await postsDataLoader('recent')
    }

    const post = postsStore.findPost(id)

    if (!post) {
        throw new Error('Post not found')
    }

    return post
}
