import { postsDataLoader } from './postsDataLoader'

export async function postDataLoader(id) {
    const posts = await postsDataLoader('recent')
    const post = posts.find((post) => post.id === id)

    if (!post) {
        throw new Error('Post not found')
    }

    return post
}
