import { useQueryPosts } from '../hooks/useQueryPosts'

const Posts = () => {
    const {data} = useQueryPosts()
    return (
      <div>
        {data?.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }

export default Posts;