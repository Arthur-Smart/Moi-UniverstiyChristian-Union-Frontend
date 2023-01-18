import React from 'react'
import AboutStatements from '../../components/aboutstatements/AboutStatements'
import ExOfficial from '../../components/exofficials/ExOfficial'
import Membership from '../../components/membership/Membership'
import Official from '../../components/officials/Official'
import './about.css'

function About() {
  return (
    <div className='about'>
    <div className='about-top flex flex-col items-center justify-center bg-green-700'>
      <div className='container flex flex-col py-10'>
          <p className='text-white text-2xl font-bold px-4'>About Moi University Annex Campus Christian Union</p>
          <p className='text-white px-4'>Learn of our leadership and membership</p>
      </div>
    </div>
      <AboutStatements/>  
      <ExOfficial/>
      <Official/>
      <Membership/>
    </div>
  )
}

export default About