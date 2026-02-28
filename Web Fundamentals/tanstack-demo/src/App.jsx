import React from 'react'
import PostList from './components/PostList'
import AddPost from './components/AddPost'
import './App.css'

const App = () => {
  return (
    <div className='py-10 text-center'>
      <h1 className='font-bold text-4xl'>
        TanStack Query Demo
      </h1>
      <AddPost />
      <hr />
      <PostList />
    </div>
  )
}

export default App
