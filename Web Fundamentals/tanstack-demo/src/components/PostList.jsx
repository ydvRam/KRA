import React from "react";
import { usePost } from "../hooks/usePost";

const PostList = () => {
  // const { postsQuery } = usePost();
  const { postQuery } = usePost()
  const { data, isLoading, isError, error, refetch } = postQuery

  if (isLoading) {
    return <p >Loading Posts...</p>
  }
  if (isError) {
    return <p>Error:{error.message}</p>
  }
  return (
    <div>
      <h2 className="py-3 text-2xl font-bold ">Posts</h2>
      <button className="rounded border w-30 h-11 bg-blue-700 text-white mb-3" onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PostList;