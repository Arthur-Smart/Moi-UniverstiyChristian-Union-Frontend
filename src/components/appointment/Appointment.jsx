import React, {useState} from 'react'
import Tab from '../tab/Tab'
import './appointment.css'
import { axiosInstance } from '../../config'

function Appointment() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [date, setDate] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async() =>{
      const {data} = await axiosInstance.post('api/appointment', {
        name, email, phone, subject, date
      })
      setSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setDate('')

      setTimeout(()=> {
        setSuccess(false)
      },3000)
  }
  


  return (
    <div className='appointment flex flex-col items-center justify-center py-10'>
        <p className='font-bold text-gray-600 text-2xl text-center px-4'>Book an appointment with one of us</p>
        <p className='text-center px-4'>Find direction and support in your faith journey with a Christian Union appointment.</p>
        <Tab/>
        <div className='container flex flex-col items-center justify-center mt-5'>
            <input value={name} onChange={(e) => setName(e.target.value)} className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Type full name...'/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='email' placeholder='Type email...'/>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Type phone...'/>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Subject of appointment...'/>
            <input value={date} onChange={(e) => setDate(e.target.value)}className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='date'/>
            <button onClick={() => handleSubmit()} className='reg-btn font-medium border-2 py-2 px-4 text-white rounded-md bg-green-700 hover:bg-green-800'>Book</button>       
            {success && <p>Appointment booked<i className="fa-solid fa-thumbs-up text-green-700"></i></p>}            
        </div>
    </div>
  )
}

export default Appointment