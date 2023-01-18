import React from 'react'
import Tab from '../tab/Tab'
import './aboutstatements.css'

function AboutStatements() {
  return (
    <div className='aboutstatement flex flex-col items-center justify-center py-16'>
        <p className='font-bold text-2xl text-center text-gray-600 text-center px-4'>Our mission , vision and core value</p>
        <Tab/>
        <div className='container flex flex-wrap items-center justify-center gap-3 mt-6'>
            <div className='statement-container rounded-md py-3 flex flex-col  items-center'>
                <img src={require('../../assets/mission.png')} alt=''/>
                <div>
                    <p className='font-bold text-xl text-center text-gray-600'>Our mission</p>
                    <p className='text-center'>To draw as many people to our Lord and Savior Jesus Christ and ensure maturity of all believers.</p>
                </div>
            </div>

            <div className='statement-container rounded-md py-3 flex flex-col items-center'>
                <img src={require('../../assets/vision.png')} alt=''/>
                <div>
                    <p className='font-bold text-xl text-center text-gray-600'>Our vision</p>
                    <p className='text-center'>To be a christian union that fosters holistic growth of students by reading, believing and living God's word and to be an instrument of transformation in the university.</p>
                </div>
            </div>

            <div className='statement-container rounded-md py-3 flex flex-col  items-center'>
                <img src={require('../../assets/praying.png')} alt=''/>
                <div>
                    <p className='font-bold text-xl text-center text-gray-600'>Our core values</p>
                    <p className='text-center'>Faithfulness to the Holy Scripture, Unity in Christ, Integrity, Stewardship, Servanthood</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutStatements