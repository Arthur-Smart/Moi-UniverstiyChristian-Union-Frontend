import React from 'react'
import Tab from '../../components/tab/Tab'
import VideosData from '../../components/videosdata/VideosData'
import './videos.css'

function Videos() {
  return (
    <div className='videos flex flex-col items-center justify-center'>
        <div className='about-top flex flex-col items-center justify-center bg-green-700'>
            <div className='container flex flex-col py-10'>
                <p className='text-white text-2xl font-bold'>Uplifting Christian Videos to Strengthen Your Walk with God</p>
                <p className='text-white'>Exploring the Depths of God's Love and Grace Through Faith, Prayer, and the Bible</p>
              <button className='video-btn  border-2 py-2 rounded-md text-white hover:bg-red-700 mt-1'>Read articles</button>
            </div>
        </div>
        <p className='font-bold text-2xl text-center text-gray-600 mt-4' >Faith based christian videos</p>
        <p>Listen and live</p>
        <Tab/>

        <VideosData/>
    </div>
  )
}

export default Videos