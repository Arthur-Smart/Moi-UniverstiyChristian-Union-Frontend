import React, {useState} from 'react'
import MinistryData from '../../components/ministrydata/MinistryData'
import Tab from '../../components/tab/Tab'
import './ministries.css'
import { axiosInstance } from '../../config'

function Ministries() {

  const [showRegModel, setShowRegModel] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [ministry, setMinistry] = useState('')

  const handleSubmit = async () => {
  if(name ==='' && phone ==='' && ministry ===''){
        alert('Please fill all the fields')
  } else{
        const {data} = await axiosInstance.post('api/ministry/', {
            name, phone, ministry
        });
        console.log(data)
        setName('')
        setPhone('')
        setMinistry('')
        setShowRegModel(false)
        }   
  }  

  return (
    <div className='ministries'>
        <div className='about-top flex flex-col items-center justify-center bg-green-700'>
            <div className='container flex flex-col py-10 px-4'>
                <p className='text-white text-2xl font-bold '>Moi University Annex Campus Christian Union Ministries</p>
                <p className='text-white'>All members are warmly invited to participate in our various church ministries.</p>
                <button onClick={() =>  setShowRegModel(true)} className='ministry-btn border-2 py-2 rounded-md text-white hover:bg-red-700 mt-1'>Join ministry</button>
            </div>
        </div>
        <MinistryData/>
        {showRegModel && (
            <div className='modal flex items-center justify-center'>
            <div className='register-ministry flex flex-col items-center justify-center rounded-md p-3'>
                <p onClick={() =>  setShowRegModel(false)} className='text-red-700 cursor-pointer text-2xl '><i class="fa-solid fa-circle-xmark"></i></p>
                <p>Fill in the fields to continue</p>
                <Tab/>
                <input value={name} onChange={(e) => setName(e.target.value)} className='ministry-inputs border-2 py-3 px-1 mt-4 mb-2 rounded-md outline-green-100' type='text' placeholder='Enter name'/>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className='ministry-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100' type='text' placeholder='Enter phone'/>
                <select value={ministry} onChange={(e) => setMinistry(e.target.value)} className='ministry-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100'>
                    <option>--Select--</option>
                    <option value='praise'>Praise & Worship</option>
                    <option value='media'>Media Ministry</option>
                    <option value='hospitality'>Hospitality</option>
                    <option value='prayer'>Prayer Ministry</option>
                </select>
                <button onClick={() => handleSubmit()} className='ministry-reg-btn font-medium border-2 py-2 px-4 text-white rounded-md bg-green-700 hover:bg-green-800'>Register</button>
            </div>
        </div>
        )}
        
    </div>
  )
}

export default Ministries