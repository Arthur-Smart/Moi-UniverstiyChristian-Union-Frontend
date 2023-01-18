import React, {useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Tab from '../tab/Tab'
import './datasocket.css'

function DataSocket() {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <div className='datasocket py-10 flex flex-col py-4 items-center justify-center'>
        <p className='text-center text-xl font-medium  text-gray-600'>Some facts about us</p>
        <Tab/>
        <ScrollTrigger className='container'  onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div   className='container  data-cont-wrapper mt-4 flex flex-wrap items-center justify-between'>
            {counterOn && 
            <div className='data-container rounded-md flex flex-col items-center justify-center bg-slate-200'>
                 <p  className='font-bold text-5xl  text-gray-600'>               
                  <CountUp start={0} end={1200} duration={2} delay={0}/>               
                </p>                
                <p className='font-medium text-gray-600'>In session</p>
            </div>
            }
            {counterOn && 
            <div className='data-container rounded-md flex flex-col items-center justify-center bg-green-700'>
                <p className='font-bold text-5xl text-white'>
                    <CountUp start={0} end={15} duration={2} delay={0}/>
                </p>
                <p className='text-white font-medium'>Number of Bible study</p>
            </div>
            }
            {counterOn && 
            <div className='data-container rounded-md flex flex-col items-center justify-center bg-cyan-600'>
                <p className='font-bold text-5xl text-white'>
                    <CountUp start={0} end={11} duration={3} delay={0}/>
                </p>
                <p className='text-white font-medium'>Number of ministries</p>
            </div>
            }
            {counterOn && 
            <div className='data-container rounded-md flex flex-col items-center justify-center bg-slate-200'>
                <p className='font-bold text-5xl  text-gray-600'>
                    <CountUp start={0} end={5} duration={4} delay={0}/>
                </p>
                <p className='font-medium text-gray-600'>Projects work in progress</p>
            </div>
            }
        </div>
        </ScrollTrigger>
    </div>
  )
}

export default DataSocket