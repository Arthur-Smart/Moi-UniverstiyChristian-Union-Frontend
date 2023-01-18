import React, {useState} from 'react'
import Appointment from '../../components/appointment/Appointment'
import Article from '../../components/article/Article'
import BibleStudy from '../../components/biblestudy/BibleStudy'
import DataSocket from '../../components/datasocket/DataSocket'
import HomeAbout from '../../components/homeabout/HomeAbout'
import HomeHero from '../../components/homehero/HomeHero'
import HomeLibrary from '../../components/homelibrary/HomeLibrary'
import Program from '../../components/program/Program'
import ServicePrograms from '../../components/serviceprograms/ServicePrograms'
import Testimonials from '../../components/testimonials/Testimonials'
import Updates from '../../components/updates/Updates'
import './home.css'

function Home() {

  const [showModal, setShowModal] = useState(false)
  const [showWeeklyModal, setShowWeeklyModal] = useState(false)
  return (
    <div className='home'>
        <HomeHero/>
        <Updates/>
        <HomeAbout/>
        <DataSocket/>
        <Testimonials/>
        <Program/>
        <HomeLibrary/>
        <BibleStudy/>
        <Article/>
        <Appointment/>
        <ServicePrograms setShowModal={setShowModal} setShowWeeklyModal={setShowWeeklyModal}/>
        {showModal && (<div className='modal flex items-center justify-center'>
            <div className='sunday bg-white rounded-md'>
                <div className='flex title-holder items-center justify-between p-3'>
                  <p className='font-bold text-lg text-green-700'>Our sunday program</p>
                  <p className='text-red-700 cursor-pointer text-2xl' onClick={() => setShowModal(false)}><i class="fa-solid fa-circle-xmark"></i></p>
                </div>
                <div className='flex flex-col p-3'>
                    <p className='mb-2 font-medium text-slate-600' > <i class="fas fa-check-circle"></i> Intercessory</p>
                    <p className='mb-2 font-medium text-slate-600' > <i class="fas fa-check-circle"></i> Praise & Worship</p>
                    <p className='mb-2 font-medium text-slate-600' > <i class="fas fa-check-circle"></i> Bible Class</p>
                    <p className='mb-2 font-medium text-slate-600' > <i class="fas fa-check-circle"></i> Choir & Offering</p>
                    <p className='mb-2 font-medium text-slate-600' > <i class="fas fa-check-circle"></i> Preachings</p>
                </div>
                <div className='modal-footer bg-green-700 p-3'>
                    <p className=' font-bold  text-center text-white'>From 8:30am - 12:00 noon Every Sunday</p>
                </div>
            </div>
        </div>
        )}
      {
        showWeeklyModal && 
        <div className='modal flex items-center justify-center'>
            <div className='sunday bg-white rounded-md'>
                <div className='flex title-holder items-center justify-between p-3'>
                  <p className='font-bold text-lg text-green-700'>Our Weekly program</p>
                  <p className='text-red-700 cursor-pointer text-2xl' onClick={() => setShowWeeklyModal(false)}><i class="fa-solid fa-circle-xmark"></i></p>
                </div>
                <div className='flex flex-col p-3'>
                    <p className='mb-2 text-slate-600' ><strong> <i class="fas fa-check-circle"></i> Monday:</strong> Prayer & Fasting for leaders(6:00AM - 6:00PM) | Media & Editorial training(3:00PM - 5:00PM)</p>
                    <p className='mb-2 text-slate-600' ><strong> <i class="fas fa-check-circle"></i> Tuesday:</strong> Praise & Worship & Technical practices(5:00PM - 7:00PM)</p>
                    <p className='mb-2 text-slate-600' ><strong> <i class="fas fa-check-circle"></i> Wednesday:</strong> Prayer & Fasting for the church(6:00AM - 6:00PM) | Wednesday service(5:00PM - 7:00PM)</p>
                    <p className='mb-2 text-slate-600' ><strong> <i class="fas fa-check-circle"></i> Thursday:</strong> Brother's keeper & God's girl fellowship / Yearly fellowship(5:00PM - 7:00PM)</p>
                    <p className='mb-2 text-slate-600' ><strong> <i class="fas fa-check-circle"></i> Friday:</strong> Bible study fellowship(5:00PM - 7:00PM</p>
                    <p className='mb-2 text-slate-600' ><strong> <i class="fas fa-check-circle"></i> Saturday:</strong> Ushering| Technical set-up| Praise & Worship| Best-P classes | Evening prayers</p>
                    <p className='mb-2 text-slate-600' ><strong> <i class="fas fa-check-circle"></i>  Sunday:</strong> Powerful sunday service(8:30AM - 12:00PM)</p>
                </div>
                <div className='modal-footer bg-green-700 p-3'>
                    <p className=' font-bold  text-center text-white'>From Monday -  Sunday</p>
                </div>
            </div>
        </div>
      }
        
        
    </div>
  )
}

export default Home