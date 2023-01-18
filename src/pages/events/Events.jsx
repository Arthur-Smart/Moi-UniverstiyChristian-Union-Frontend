import React from 'react'
import EventsData from '../../components/eventsdata/EventsData'
import EventsFacts from '../../components/eventsfacts/EventsFacts'
import './events.css'

function Events() {
  return (
    <div className='events'>
        <div className='about-top flex flex-col items-center justify-center bg-green-700 px-4'>
            <div className='container flex flex-col py-10'>
                <p className='text-white text-2xl font-bold'>Get to know more of our annual church events</p>
                <p className='text-white'>Activities which are Transforming | Educating | Enlightening.</p>
            </div>
        </div>
        <EventsData/>
        <EventsFacts/>
    </div>
  )
}

export default Events