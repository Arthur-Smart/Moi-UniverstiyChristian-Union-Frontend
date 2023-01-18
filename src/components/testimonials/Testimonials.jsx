import React from 'react'
import Tab from '../tab/Tab'
import './testimonials.css'

function Testimonials() {
  return (
    <div className='testimonials flex flex-col items-center justify-center py-20'>
        <p className='font-bold text-gray-600 text-3xl text-center px-4' >Testimonies from some of us</p>
        <p className='text-center px-4'>Find encouragement and inspiration in these testimonial from our Christian Community</p>
        <Tab/>
        <div className='container mt-10 testimonials-wrapper mb-5 flex flex-wrap itmes-center justify-between gap-2'>
            <div className='testimonial-cont flex flex-col items-center rounded-md border-2 border-slate-300 p-3'>
                <img src={require('../../assets/testimonial1.jpg')} alt=''/>
                <p className='font-bold text-gray-600 text-2xl' >Jecinta Njue</p>
                <p>It has been a short while, with a million blessing, a mojor learning and growth platform all in one family. I love the phase that "In MUACCU everybody is somebody" because I have witnessed this.</p>
                <div className='animation-tab bg-green-700'>
                    <p className='text-center text-white'>Unity in Christ</p>
                </div>
            </div>
            <div className='testimonial-cont flex flex-col items-center rounded-md border-2 border-slate-300 p-3'>
                <img src={require('../../assets/testimonial2.jpg')} alt=''/>
                <p className='font-bold text-gray-600 text-2xl' >Amos Juma</p>
                <p>Themed on 'Unity inChrist', MUACCU hosts a diverse of people based on their religious beliefs, different cultural behavour and also different church denominations. The fellowship in MUACCU is contagious, heart-touching and life changing. No one needs to attend the service twice to testify of the goodness of the LORD in fellowship.</p>
                <div className='animation-tab bg-green-700'>
                    <p className='text-center text-white'>Unity in Christ</p>
                </div>
            </div>
            <div className='testimonial-cont flex flex-col items-center rounded-md border-2 border-slate-300 p-3'>
                <img src={require('../../assets/testimonial3.jpg')} alt=''/>
                <p className='font-bold text-gray-600 text-2xl' >Faith Mwanzia</p>
                <p>I thank God for a family that has been a family far away from home. MUACCU has been a good place for me . It has been a platform for me to grow in all aspects of life. I have been mentored by great people am really grateful.</p>
                <div className='animation-tab bg-green-700'>
                    <p className='text-center text-white'>Unity in Christ</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials