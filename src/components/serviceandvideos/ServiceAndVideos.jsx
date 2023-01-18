import React, {useState, useEffect} from 'react'
import Tab from '../tab/Tab'
import axios from 'axios'
import './serviceandvideos.css'
import { axiosInstance } from '../../config'

function ServiceAndVideos({setShowVideos, setShowServices}) {
    const [image, setImage] = useState(null)
    const [topic, setTopic] = useState('')
    const [speaker, setSpeaker] = useState('')
    const [venue, setVenue] = useState('')
    const [day, setDay] = useState('')
    const [date, setDate] = useState('') 

   

    const handleUpload = async() => {
        if (topic !=='' && speaker !=='' && venue !=='' && day !=='' && date !==''){
            const serviceData = {
            topic, speaker, venue, day, date
        }

        if(image){
            const data = new FormData();
            data.append("file",image);
            data.append("upload_preset", "uploads");
    
        try {
            const uploadFile = await axios.post("https://api.cloudinary.com/v1_1/dc86lmshz/image/upload", data);
            const { url } = uploadFile.data;
            serviceData.image = url
            } catch (err) {
                console.log(err)
        }
    }

         try {
            const res = await axiosInstance.post('api/service', serviceData)
            console.log(res);
        } catch (error) {
            console.log(error)
     }
            setTopic('')
            setSpeaker('')
            setVenue('')
            setDay('')
            setDate('')
        } else{
            alert('Please fill all the field to publish service')
        }
        
    }

  return (
    <div className='service-video-wrapper flex gap-2 '>
        <div className='service-v flex flex-col p-3 rounded-md'>
            <p className='font-medium text-lg py-1 text-slate-600'>Upload a video for your blog</p>
            <Tab/>
            <img className='rounded-md mt-3' src={require('../../assets/team.jpg')} alt=''/>
            <div className='flex flex-col mt-2'>
                <input   className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='file'/>
                <input  className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='text' placeholder='Enter topic'/>
                <div className='upload-btns flex'>
                    <button className='upload-btn py-2 px-4 border-2 bg-green-700 hover:bg-green-800 mr-2 text-white rounded-md'>Upload Video</button>
                    <button onClick={() => setShowVideos(true)} className='upload-btn py-2 px-4 border-2   mr-2 text-slate-700 font-medium rounded-md'>View uploaded videos</button>
                </div>
                
            </div>
        </div>
        <div className='service-p flex flex-col p-3 rounded-md'>
            <p className='font-medium text-lg py-1 text-slate-600'>Update your weekly services</p>
            <Tab/>
            {image ? <img className='rounded-md mt-3' src={URL.createObjectURL(image)} alt=''/> : <img className='rounded-md mt-3' src={require('../../assets/team.jpg')} alt=''/> }
            <div className='flex flex-col mt-2'>
                <input onChange={(e) => setImage(e.target.files[0])} className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='file'/>
                <input value={topic} onChange={(e) => setTopic(e.target.value)} className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='text' placeholder='Enter topic'/>
                <input value={speaker} onChange={(e) => setSpeaker(e.target.value)} className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='text' placeholder='Speaker name'/>
                <input value={venue} onChange={(e) => setVenue(e.target.value)} className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='text' placeholder='Enter venue'/>
                <select value={day} onChange={(e) => setDay(e.target.value)} className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'>
                    <option>--Select day--</option>
                    <option value='wednesday'>Wednesday</option>
                    <option value='sunday'>Sunday</option>
                </select>
                <input value={date} onChange={(e) => setDate(e.target.value)} className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='date'/>
                <div className='flex'>
                <button onClick={() => handleUpload()} className='upload-btn py-2 px-4 border-2 bg-green-700 hover:bg-green-800 mr-2 text-white rounded-md'>Upload</button>
                <button onClick={() =>setShowServices(true)} className='upload-btn py-2 px-4 border-2   mr-2 text-slate-700 font-medium rounded-md hover:bg-green-700 hover:text-white'>View Uploads</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceAndVideos