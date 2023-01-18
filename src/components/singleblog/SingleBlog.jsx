import React from 'react'
import {Link} from 'react-router-dom'
import './singleblog.css'

function SingleBlog({article}) {
  return (
    <div className='single-blog container flex  justify-between mb-4 p-2 rounded-md'>
        <div className='single-blog-left'>
            <img className='rounded-md' src={article.image} alt=''/>
        </div>
        <div className='single-blog-right ml-2'>
            <p className='font-bold text-slate-600 text-lg'>{article.title}</p>
            <p className='article-desc'>{article.description}</p>
          <Link to={`/article/${article._id}`}> <button className='border-2 py-2 px-4 font-medium rounded-md hover:bg-green-700 hover:text-white'>Read more</button></Link>
            <p className='mt-2 font-medium'>Post: {article.createdAt}</p>
        </div>
    </div>
  )
}

export default SingleBlog