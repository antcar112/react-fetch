import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './useFetch'

interface Post {
  title: string
  body: string
  id: string
}

function App() {
  const { data: posts, loading } = useFetch<Post>('https://jsonplaceholder.typicode.com/posts')

  if (loading || !posts) {
    return <h3>Loading...⏰</h3>
  }

  return (
    <div>
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <h6>{post.title}</h6>
          <span>{post.body}</span>
        </div>
      ))}
    </div>
  )
}

export default App
