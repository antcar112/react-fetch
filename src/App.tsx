import { useEffect, useState } from 'react'
import './App.css'

interface Post {
  title: string
  body: string
  id: string
}

function App() {
  const [posts, setPosts] = useState<Post[] | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      // Error handling... handle error
      setPosts(data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

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
