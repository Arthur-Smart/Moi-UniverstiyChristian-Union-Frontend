import React from 'react'
import Tab from '../tab/Tab'
import { Link } from 'react-router-dom'
import './homelibrary.css'

function HomeLibrary() {
  return (
    <div className='homelibrary flex flex-col items-center justify-center pb-10'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L720,64L1440,128L1440,0L720,0L0,0Z"></path></svg>
       <p className='font-bold text-gray-600 text-2xl lib-title text-center px-4'>A good Christian Leader is a good reader</p>
       <p className='text-center px-4'>Grab a christian book and learn</p>
       <Tab/>
        <div className='container home-l-wrapper flex flex-wrap items-center justify-between mt-10'>
            <div className='lib-container rounded-md flex flex-col items-center justify-center p-4'>
                <img src={require('../../assets/dating.png')} alt=''/>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-bold text-gray-600 text-2xl text-center my-5' >Christian Dating</p>
                    <p className='text-center'>Relationships rooted in the knowledge of Christ with a goal of marriage</p>
                    <a href={require('../../assets/pdfs/love.pdf')} download className='lib-btn font-medium border-2 py-2 px-4 rounded-md hover:bg-green-700 hover:text-white text-center' ><button >Get book</button></a>
                </div>
            </div>
            <div className='lib-container rounded-md flex flex-col items-center justify-center p-4'>
                <img src={require('../../assets/sword.png')} alt=''/>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-bold text-gray-600 text-2xl text-center my-5'>Overcoming sipiritual warfares</p>
                    <p className='text-center' >Renewed and transformed mind that will overcome all spiritual battles</p>
                    <a href={require('../../assets/pdfs/secret.pdf')} download className='lib-btn font-medium border-2 py-2 px-4 rounded-md hover:bg-green-700 hover:text-white text-center' ><button >Get book</button></a>
                </div>
            </div>
            <div className='lib-container rounded-md flex flex-col items-center justify-center p-4'>
                <img src={require('../../assets/praying.png')} alt=''/>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-bold text-gray-600 text-2xl text-center my-5' >Power of a praying and fasting man</p>
                    <p className='text-center'>Bring down every covenant and mantel of darknes by payer and fasting</p>
                    <a href={require('../../assets/pdfs/prayer.pdf')} download className='lib-btn font-medium border-2 py-2 px-4 rounded-md hover:bg-green-700 hover:text-white text-center' ><button >Get book</button></a>
                </div>
            </div>
        </div>
       <Link to='/library'> <button className='py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md mt-10'>Visit our E-Library</button></Link>
    </div>
  )
}

export default HomeLibrary