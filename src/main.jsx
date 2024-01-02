import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'normalize.css'
import { userDataLoader, postsDataLoader, postDataLoader } from './loaders'
import { HomePage, PostPage } from './pages'
import { MainLayout } from './layouts'

const router = createBrowserRouter([
    {
        id: 'root',
        loader: userDataLoader,
        Component: MainLayout,
        children: [
            // News sorting
            ...['', 'popular', 'upvoted', 'discussed', 'recent', 'most-visited', 'bookmarks'].map(
                (path) => ({
                    id: `posts:${path || 'default'}`,
                    path: `/${path}`,
                    loader: () => postsDataLoader(path || 'recent'),
                    Component: HomePage,
                })
            ),

            // Post
            {
                id: 'post',
                path: '/post/:postId',
                loader: ({ params }) => postDataLoader(params.postId),
                Component: PostPage,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
