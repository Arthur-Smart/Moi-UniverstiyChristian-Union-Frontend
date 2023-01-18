import React from 'react'
import Tab from '../tab/Tab'
import './program.css'

function Program() {
  return (
    <div className='program flex flex-col items-center justify-center'>
        <p className='font-bold text-gray-600 text-2xl text-center px-4' >Have you heard of our events and weekly services?</p>
        <Tab/>
        <div className='container program-p-wrapper flex items-center justify-between mt-5'>
            <div className='program-left flex flex-col items-center rounded-md bg-green-700 p-3'>
                <p className='font-bold text-2xl text-white text-center'>Moi University Annex Campus Christian Union Services and Events</p>
                <p className='text-white' >We welcome you to our Sunday services which is one of our events. Below is a inspiring sermon that was done by one of us. For more of our sermons click the button to watch more of our Spirit lifting sermons.</p>
                <div className='video-container mt-2 rounded-md'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7cfvS5oTwOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className='program-right'>
                <p>Moi university Annex Campus Christian Union annual and weekly events provides a platform for each believer to grow. In the process of attending and participating in the events individuals find their purpose and area of serving. The prayer weeks, discipleship, bible study brother's keep and God's girls just to mention a few have played a big role that has contributed to an individual personal knowledge about God. Not to forget the Vuka Fyt program for the finalist that has greatly prepared the out going students on how to cope up with various life transition challenges. It has provided a biblical path way on matters of marriage , handling finance and other social aspects of life. As the MUACCU motto say Unity in Christ, this unity is clearly manifested by the believer. Uniting in fellowship and studying with one another has really brought thier motto in reality. It's my encouragement to everyone to take a step of being a part of MUACCU events. The events has provided friendship that are like having a familiy far away from home. When the believers come together to participate in this events, a bond of Godly friendship is created and truthful and God fearing friends are established.</p>
            </div>
        </div>
    </div>
  )
}

export default Program