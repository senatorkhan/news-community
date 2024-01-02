import { useLoaderData } from 'react-router-dom'
import { Card } from '../components'

export function PostPage() {
    const post = useLoaderData()

    return <Card {...post} />
}
