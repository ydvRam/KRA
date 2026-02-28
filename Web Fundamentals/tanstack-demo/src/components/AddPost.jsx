import React, { useState } from "react";
import { usePost } from "../hooks/usePost";

const AddPost = () => {
  const { addPostMutation } = usePost();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    addPostMutation.mutate({
      title,
      body: "Sample Body",
      userId: 1,
    })
    setTitle("")
  }

  return (
    <div className="py-5">
      <h2 className=" pb-5 text-2xl font-bold ">Add Post</h2>
      <form className="flex justify-center gap-5 items-center" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="p-2 border rounded my-5 focus:outline-none 
         focus:ring-1 
         focus:ring-blue-500"
        />
        <button type="submit" className="rounded  border w-20 h-10 bg-blue-700 text-white ">Add</button>
      </form>
      {addPostMutation.isLoading && <p>Adding Post...</p>}
      {addPostMutation.isError && <p>Error adding post</p>}
      {addPostMutation.isSuccess && <p>Post added!</p>}
    </div>
  )
}
export default AddPost