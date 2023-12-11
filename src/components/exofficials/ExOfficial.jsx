import React from 'react'
import Tab from '../tab/Tab'
import './exofficial.css'

function ExOfficial() {
  return (
    <div className='ex-official flex flex-col items-center justify-center py-16'>
        <p className='font-bold text-2xl text-center text-gray-600'>Meet our ex-official leaders</p>
        <Tab/>
        <div className='container flex flex-wrap items-center justify-center gap-3 mt-10'>
            <div className='leader-container rounded-md'>
                <div className='name-container bg-green-700 px-2'>
                    <p className='text-white font-medium text-lg' >Andrew B.Malele</p>
                    <p className='text-white' >Campus Ministry Facilitator</p>
                </div>
                <img src={require('../../assets/malele.jpg')} alt=''/>                
            </div>

            <div className='leader-container rounded-md'>
                <div className='name-container bg-green-700 px-2'>
                    <p className='text-white font-medium text-lg' >Rev.Tanui</p>
                    <p className='text-white' >CU chaplain</p>
                </div>
                <img src={require('../../assets/chaplain.jpg')} alt=''/>                
            </div>

            <div className='leader-container rounded-md'>
                <div className='name-container bg-green-700 px-2'>
                    <p className='text-white font-medium text-lg' >Faith Kasila</p>
                    <p className='text-white' >STEM Staff</p>
                </div>
                <img src={require('../../assets/faith.jpg')} alt=''/>                
            </div>
        </div>
    </div>
  )
}

export default ExOfficial