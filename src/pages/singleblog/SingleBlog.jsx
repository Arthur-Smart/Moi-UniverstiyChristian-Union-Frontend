import React,{useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { axiosInstance } from '../../config'
import './singleblog.css'

function SingleBlog() {
    const [article, setArticle] = useState([])
    const location = useLocation()
    const path = location.pathname.split('/')[2];
    console.log(article)
    const singleArticle = article?.find((p) => p._id.toString() === path);

    useEffect(() => {
        const getArticle = async () => {
           try {
             const res = await axiosInstance.get('api/article/')
             setArticle(res.data)
           } catch (err) {
            console.log(err)
           }
        }
        getArticle()
    }, [])
    
  return (
    <div className='singleblog flex flex-col items-center justify-center'>
       <div className='about-top flex flex-col items-center justify-center bg-green-700'>
            <div className='container flex flex-col py-10 px-4'>
                <p className='text-white text-2xl font-bold '>This article is about {singleArticle?.title}</p>
                <p className='text-white'>Be blessed as you continue reading it. May your faith increase as well</p>
            </div>
        </div>
        <div className='container flex flex-col items-center justify-center p-4'>
            <div className='single-b-image rounded-md'>
                <img src={singleArticle?.image} alt=''/>
            </div>
            <div className='single-b-description mt-4'>
                <p>{singleArticle?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog