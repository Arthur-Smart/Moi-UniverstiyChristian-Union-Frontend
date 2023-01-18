import React from 'react'
import Blogs from '../../components/blogs/Blogs'
import './blog.css'

function Blog() {
  return (
    <div className='blog'>
        <div className='about-top flex flex-col items-center justify-center bg-green-700 px-4'>
            <div className='container flex flex-col py-10'>
                <p className='text-white text-2xl font-bold'>Discovering God's Love and Grace Through Faith in Jesus Christ</p>
                <p className='text-white'>Exploring the Depths of God's Love and Grace Through Faith, Prayer, and the Bible</p>
            </div>
        </div>
        <Blogs/>
    </div>
  )
}

export default Blog