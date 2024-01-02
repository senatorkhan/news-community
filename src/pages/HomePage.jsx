import { useLoaderData } from 'react-router-dom'
import { CardList, CardPreview } from '../components'

export function HomePage() {
    const posts = useLoaderData()

    return (
        <CardList>
            {posts.map((post) => (
                <CardPreview key={post.id} {...post} />
            ))}
        </CardList>
    )
}
