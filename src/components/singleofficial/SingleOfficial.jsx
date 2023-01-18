import React from 'react'

function SingleOfficial({official}) {
  return (
    <div className='leader-container rounded-md'>
        <div className='name-container bg-green-700 px-2'>
            <p className='text-white font-medium text-lg' >{official?.name}</p>
            <p className='text-white' >{official?.position}</p>
        </div>
        <img src={official?.image} alt=''/>                
    </div>
  )
}

export default SingleOfficial