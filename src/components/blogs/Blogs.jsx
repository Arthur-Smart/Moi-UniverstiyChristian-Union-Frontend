import React, {useState, useEffect} from 'react'
import Tab from '../tab/Tab'
import SingleBlog from '../singleblog/SingleBlog'
import './blogs.css'
import { axiosInstance } from '../../config'

function Blogs() {
  const [articles, setArticles] = useState([])
  useEffect(() =>{
    const getArticles = async() =>{
      const data = await axiosInstance.get('api/article/')
      setArticles(data.data)
    }
    getArticles()
  },[])
  return (
    <div className='blogs flex flex-col items-center justify-center py-10'>
        <p className='font-bold text-gray-600 text-2xl text-center px-4'>Uplifting articles for your day to day spiritual life</p>
        <Tab/>
        <div className='container flex flex-col items-center justify-center mt-7'>
          {articles.map((article) => (
             <SingleBlog article={article}/>
          ))
          } 
        </div>
    </div>
  )
}

export default Blogs