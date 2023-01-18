import React from 'react'
import './singlebook.css'

function SingleBook({book}) {
  return (
    <div className='book-container rounded-md'>
        <div className='name-container bg-green-700 px-2'>
            <p className='text-white font-medium text-lg' >{book?.title}</p>
            <p className='text-white' ><strong>By:</strong> {book?.author}</p>
        </div>
        <div className='download flex items-center justify-center  rounded-md cursor-pointer'>
            <a href={book?.pdf} title='download'>
                <img className='download-icon' src={require('../../assets/download.png')} alt=''/>
            </a>
        </div>
        <img src={book?.thumbnail} alt=''/>                
    </div>
  )
}

export default SingleBook