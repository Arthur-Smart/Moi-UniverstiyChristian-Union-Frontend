import React from 'react'
import Tab from '../tab/Tab'
import './eventsdata.css'

function EventsData() {
  return (
    <div className='eventsdata flex flex-col items-center justify-center py-10'>
        <p className='font-bold text-2xl text-center text-gray-600 text-center px-4' >We are usually engaged in some christian events anually.</p>
        <Tab/>
        <div className='container flex flex-wrap items-center justify-center gap-3 mt-10'>
            <div className='event-container rounded-md'>
                <img src={require('../../assets/event1.jpg')} alt=''/>
                <div className='event-title bg-green-700'>
                    <p className='text-center text-white'>1st year's oriatation</p>
                </div>
            </div>

            <div className='event-container rounded-md'>
                <img src={require('../../assets/event4.jpg')} alt=''/>
                <div className='event-title bg-green-700'>
                    <p className='text-center text-white'>CU educative retreats</p>
                </div>
            </div>

            <div className='event-container rounded-md'>
                <img src={require('../../assets/event5.jpg')} alt=''/>
                <div className='event-title bg-green-700'>
                    <p className='text-center text-white'>African and foodbank sunday</p>
                </div>
            </div>

            <div className='event-container rounded-md'>
                <img src={require('../../assets/event3.jpg')} alt=''/>
                <div className='event-title bg-green-700'>
                    <p className='text-center text-white'>Chastity week</p>
                </div>
            </div>

            <div className='event-container rounded-md'>
                <img src={require('../../assets/event2.jpg')} alt=''/>
                <div className='event-title bg-green-700'>
                    <p className='text-center text-white'>Prayer and fasting week</p>
                </div>
            </div>

            <div className='event-container rounded-md'>
                <img src={require('../../assets/event6.jpg')} alt=''/>
                <div className='event-title bg-green-700'>
                    <p className='text-center text-white'>Focus Sunday</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsData