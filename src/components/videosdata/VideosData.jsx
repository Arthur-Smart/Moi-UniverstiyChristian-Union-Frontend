import React from 'react'
import SingleVideo from '../singlevideo/SingleVideo'
import './videosdata.css'

function VideosData() {
  return (
    <div className='videos-data container flex flex-wrap items-center justify-center gap-3 py-4'>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
        <SingleVideo/>
    </div>
  )
}

export default VideosData