import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {
  const {posts , loading , handlePageChange} = useContext(AppContext);

  return (
    <div className='flex max-w-[700px] w-11/12 mx-auto flex-col py-5 gap-10'>
    {
      loading ? <Spinner/> : (
        posts.length==0 ? (<div>No Post Found</div>) : (posts.map((post)=>
        (<div key={post.id}>
          <p className='font-bold cursor-pointer text-lg'>{post.title}</p>
          <p className='text-sm'>By <span className='italic'>{post.author}</span> on <span className='underline font-semibold'>{post.category}</span></p>
          <p className='text-sm font-medium'>Posted on <span className='text-red-800'>{post.date}</span></p>
          <p className='pt-3 font-normal'>{post.content}</p>
          <div className='text-blue-800 text-[12px] flex gap-3 pt-2 flex-wrap'>
            {post.tags.map((tag , index)=>(<div key={index} className='underline' >#{tag}</div>))}
          </div>

        </div>)))
      )
    }
    </div>
  )
}

export default Blogs