import React from 'react'
import Tab from '../tab/Tab'
import {Link} from 'react-router-dom'
import './homeabout.css'

function HomeAbout() {
  return (
    <div className='homeabout flex flex-col items-center  py-10'>
    <p className='text-center text-3xl font-bold text-gray-600 px-4'>About Moi University Annex campus Christian Union</p>
    <p className='text-center text-lg px-4'>What does our chairperson has to say</p>
    <Tab/>
        <div className='container homeabout-wrapper  mt-10 flex items-center justify-between'>
            <div className='homeabout-left'>
                <img className='rounded-md' src={require('../../assets/chairperson.jpg')} alt=''/>
            </div>
            <div className='homeabout-right'>
                <p>Greetings in the name of our Lord Jesus Christ and lifted be his Holy name. We thank God and Bless His name for his goodness upon our church which he has raised to this place that we are at now. I take this opportunity to welcome us all to this fellowship where we are a union of believers from all walks of life. Our goal as a fellowship is to raise a generation that is rich in the word of God and a generation of men and women who pray and are intentional in the things of the Kingdom. In this fellowship we partner with God to see to it that we are renewed and transformed by the Word of God.
                    Greetings in the name of our Lord Jesus Christ and lifted be his Holy name.
                </p>
                <p className='text-xl mt-5 text-green-700 font-medium'><strong className='font-bold text-gray-600'>Samuel Mac'Ouya </strong>| Chairperson</p>
                <Link to='/about'><button className='border-2 py-2 px-4 rounded-md text-green-700 hover:bg-green-700 hover:text-white font-medium'>Learn more</button></Link>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout