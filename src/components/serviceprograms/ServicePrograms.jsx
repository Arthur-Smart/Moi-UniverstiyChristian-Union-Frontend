import React, {useState} from 'react'
import './serviceprogram.css'

function ServicePrograms({setShowModal, setShowWeeklyModal}) {
  return (
    <div className='service-programs flex flex-col items-center justify-center py-10'>
        <p className='text-lg text-center px-4'>Our sunday program and weekly program</p>
        <div className='container service-btns flex items-center justify-center'>
            <button onClick={() => setShowModal(true)} className=' program-btn mr-2 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md'>Sunday program</button>
            <button onClick={() => setShowWeeklyModal(true)} className=' program-btn ml-2 border-2 py-2 px-4 rounded-md hover:bg-green-700 hover:text-white' >weekly program</button>
        </div>
    </div>
  )
}

export default ServicePrograms