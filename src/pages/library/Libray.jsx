import React from 'react'
import LibraryData from '../../components/librarydata/LibraryData'
import './library.css'

function Libray() {
  return (
    <div className='library flex flex-col items-center justify-center'>
        <div className='library-top flex flex-col items-center justify-center bg-green-700'>
            <div className='container flex flex-col py-10'>
                <p className='text-white text-2xl font-bold'>Dive into the Depths of Faith and Knowledge: A Guide to Reading Christian Bookss</p>
                <p className='text-white'>Gaining spiritual nourishment and understanding through the written word of God</p>
            </div>
        </div>
        <LibraryData/>
    </div>
  )
}

export default Libray