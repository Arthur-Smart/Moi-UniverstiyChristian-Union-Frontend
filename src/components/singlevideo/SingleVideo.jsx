import React from 'react'
import './singlevideo.css'

function SingleVideo() {
  return (
    <div className='single-video-container rounded-md'>
        <img src={require('../../assets/team.jpg')} alt=''/>
        <div className='single-video-title bg-green-700'>
            <p className='text-center text-white'>The way of faith | 03-01-2023</p>
        </div>
    </div>
  )
}

export default SingleVideo