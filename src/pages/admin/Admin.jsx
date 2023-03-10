import React, {useState, useEffect, useContext} from 'react'
import AppointmentsMade from '../../components/appointmentsmade/AppointmentsMade'
import CreatedArticles from '../../components/createdarticles/CreatedArticles'
import CreatedVideos from '../../components/createdvideos/CreatedVideos'
import RegisteredMembers from '../../components/registeredmembers/RegisteredMembers'
import ServiceAndVideos from '../../components/serviceandvideos/ServiceAndVideos'
import Tab from '../../components/tab/Tab'
import axios from 'axios'
import './admin.css'
import BibleStudyRegistrations from '../../components/biblestudyregistrations/BibleStudyRegistrations'
import CreatedServices from '../../components/createdservices/CreatedServices'
import { LoginContext } from '../../LoginContext'
import MinistryRegistration from '../../components/ministryregistration/MinistryRegistration'
import { axiosInstance } from '../../config'

function Admin() {
  const [publish, setPublish] = useState(false)
  const [showArticles, setShowArticles] = useState(false)
  const [showVideos, setShowVideos] = useState(false)
  const [showServices, setShowServices] = useState(false)

  const [ title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null) 
  const [success, setSuccess] = useState(false)

  const [articles, setArticles] = useState([])
  const [member, setMember] = useState([])
  const [appointment, setAppointment] = useState([])
  const [bibleReg, setBibleReg] = useState([])
  const [service, setService] =useState([])
  const [ministry, setMinistry] = useState([])

  const {LogoutAdmin} = useContext(LoginContext)

  useEffect(() =>{
    const getArticles = async () =>{
      const data = await axiosInstance.get('api/article/')
      setArticles(data.data)
    }
    getArticles()
  },[articles])

  useEffect(() => {
    const getRegistereMembers = async() => {
      const result = await axiosInstance.get('api/register/')
      setMember(result.data)
    }
    getRegistereMembers()
  },[member])

  useEffect(() => {
    const getAppointments = async() => {
      const res = await axiosInstance.get('api/appointment')
      setAppointment(res.data)
    }
    getAppointments()
  },[appointment])

  useEffect(() => {
    const getBibleStudyRegistrations = async() => {
      const response = await axiosInstance.get('api/bible')
      setBibleReg(response.data)
    }
    getBibleStudyRegistrations()
  },[bibleReg])

  useEffect(() => {
    const getServices = async() => {
      const services = await axiosInstance.get('api/service')
      setService(services.data)
    }
    getServices()
  },[service])

  useEffect(() => {
    const getministryReg = async() =>{
      const ministriesReg = await axiosInstance.get('api/ministry')
      setMinistry(ministriesReg.data)
    }
    getministryReg()
  },[ministry])
 
  const createArticle = async() => {
       const articleData = {
        title,
        description
       }

       if(image){
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset", "uploads");

         try {
              const uploadFile = await axios.post("https://api.cloudinary.com/v1_1/dc86lmshz/image/upload", data);
              const { url } = uploadFile.data;
              articleData.image = url
         } catch (err) {
              console.log(err)
         }
         setPublish(false)
       }

       try {
          await axiosInstance.post('api/article/', articleData)
          setTitle('')
          setDescription('')
          setTimeout(() => {
              setSuccess(true)
          }, 3000)
     } catch (error) {
        console.log(error)
     }     
  }

  return (
    <div className='admin flex flex-col items-center justify-center'>
        <div className='about-top flex flex-col items-center justify-center bg-green-700'>
            <div className='container flex flex-col py-10 items-center'>
                <p className='text-white text-center text-2xl font-bold px-4'>Welcome to the admin panel for Moi University Annex Campus Christian Union</p>
                <p className='text-center text-white px-4'>Create blog articles | upload videos | Check appointments | Check new members here</p>
                <div className='mt-3'>
                    <button onClick={() => setPublish(true)} className='py-2 px-4 border-2 bg-red-600 hover:bg-red-700 mr-2 text-white rounded-md'>Create article</button>
                    <button onClick={() => setShowArticles(true)} className='border-2 py-2 px-4 rounded-md ml-2 hover:bg-white hover:text-black text-white'>All articles</button>
                </div>
            </div>
        </div>
        <div className='container flex flex-col items-center justify-center'>
        <div className='registered-members flex flex-col'>
            <p className='font-medium text-lg py-1 text-slate-600'>Registered Members</p>
            <Tab/>
            <RegisteredMembers member={member}/>
        </div>
        <div className='appointments-made my-10'>
            <p className='font-medium text-lg py-1 text-slate-600'>Bible Study Registrations</p>
            <Tab/>
            <BibleStudyRegistrations bibleReg={bibleReg}/>
        </div>
        <div className='appointments-made my-10'>
            <p className='font-medium text-lg py-1 text-slate-600'>Appointments Made</p>
            <Tab/>
            <AppointmentsMade appointment={appointment}/>
        </div>
        <div className='appointments-made my-10'>
            <p className='font-medium text-lg py-1 text-slate-600'>Ministry Registration</p>
            <Tab/>
            <MinistryRegistration ministry={ministry}/>
        </div>
        <div className='service-video py-10'>
            <ServiceAndVideos setShowServices={setShowServices} setShowVideos={setShowVideos}/>
        </div>
        {publish && (
          <div className='modal flex items-center justify-center'>
            <div className='create-article flex flex-col items-center rounded-md p-3'>
                <p onClick={() => setPublish(false)} className='text-end text-2xl text-red-700 cursor-pointer'><i class="fa-solid fa-circle-xmark"></i></p>
                <p className='text-center font-medium text-slate-600'>Publish article</p>
                <Tab/>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className='publish-input border-2 py-3 px-1 my-2 rounded-md outline-green-100' type='text' placeholder='Article title'/>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='publish-textarea border-2 py-3 px-1 mb-2 rounded-md outline-green-100' placeholder='Write content'></textarea>
                <img src='' alt=''/>
                <input onChange={(e) => setImage(e.target.files[0])} style={{display:'none'}} type='file' id='image'/>
                <label htmlFor='image' className='cursor-pointer border-2 px-2 rounded-md'>
                  <img src={require('../../assets/pic.png')} alt=''/>
                </label>
                <button onClick={() => createArticle()} className='upload-btn mt-2 py-2 px-4 border-2 bg-green-700 hover:bg-green-800 mr-2 text-white rounded-md'>Publish</button>
                {success && <p>Published</p>}                
            </div>
        </div>
        )}
        {showArticles && (
            <div className='modal flex flex-col items-center justify-center'>
                <div className='container created-articles flex flex-col items-center bg-white p-3 rounded-md'>
                  <p onClick={() => setShowArticles(false)} className='text-end text-2xl text-red-700 cursor-pointer'><i class="fa-solid fa-circle-xmark"></i></p>
                  <p className='text-center font-medium text-slate-600'>All your written articles</p>
                  <Tab/>
                  <CreatedArticles articles={articles}/>
                </div>          
            </div>
        )}

        {showVideos && (
          <div className='modal flex flex-col items-center justify-center'>           
              <div className='container created-articles flex flex-col items-center bg-white p-3 rounded-md'>
                <p onClick={() => setShowVideos(false)} className='text-end text-2xl text-red-700 cursor-pointer'><i class="fa-solid fa-circle-xmark"></i></p>
                <p className='text-center font-medium text-slate-600'>All your video uploads</p>
                  <Tab/>
                  <CreatedVideos/>
              </div>
          </div>
        )}      
        {showServices && (
            <div className='modal flex flex-col items-center justify-center'>           
          <div className='container flex flex-col items-center bg-white p-3 rounded-md'>
            <p onClick={() => setShowServices(false)} className='text-end text-2xl text-red-700 cursor-pointer'><i class="fa-solid fa-circle-xmark"></i></p>
            <p className='text-center font-medium text-slate-600'>All your services uploads</p>
              <Tab/>
              <CreatedServices service={service}/>
            </div>
        </div>
        )}
           <button onClick={() => LogoutAdmin()} className='py-2 mb-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md' >Logout</button>          
        </div>
        
    </div>
  )
}

export default Admin