import React, {useState} from 'react'
import Tab from '../tab/Tab'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './navbar.css'
import { axiosInstance } from '../../config'

function Navbar() {
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [year, setYear] = useState('')

    const [success, setSuccess] = useState(false)
    const [mobile, setMobile] = useState(false)

    const handleSubmit = async() =>{
        const {data} = await axiosInstance.post('api/register', {
            name, email, phone, year
        })
        setName('')
        setEmail('')
        setPhone('')
        setYear('')
        setSuccess(true)
        setTimeout(() =>{
            setShowRegisterForm(false)
            setSuccess(false)
        },2000)
        console.log(data)
    }

  return (
    <div className='navbar flex flex-col items-center justify-center px-4'>
        <div className='container flex items-center justify-center top-nav'>
            <p className='text-gray-600 font-black top-bar-text text-xl'>MOI UNIVERSITY ANNEX CAMPUS CHRISTIAN UNION</p>
        </div>

        <div className='container py-4 flex items-center justify-between bottom-nav '>
           <div className='logo'>
           <Link to='/'>
                <img  className='cursor-pointer' src={require('../../assets/logo.jpg')} alt=''/>
           </Link>     
            </div>
            
            <div  className='nav-links web-view  flex items-center justify-between'>
                <Link to='/'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Home</p></Link>
                <Link to='/about'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >About</p></Link>
                <Link to='/ministries'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Ministries</p></Link>
                <Link to='/events'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Events</p></Link>
                <Link to='/contact'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Contact</p></Link>
                <Link to='/article'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Blog</p></Link>
                {/*<div className='nav-blog'>
                    <p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Blog <i class="fa-solid fa-chevron-down"></i></p>
                    <div className='blog-links  p-2'>
                        <div className='blog-links-wrapper border-2 rounded-md p-2'>
                            <Link to='/article'><p className='text-gray-600 cursor-pointer hover:text-green-700 mb-4' >Written articles</p></Link>
                            <Link to='/videos'><p className='text-gray-600 cursor-pointer hover:text-green-700 ' >Video articles</p></Link>
                        </div>
                    </div>
                </div>*/}
            </div>
            <div className='nav-btns web-view flex items-cemter justify-around'>
                <button onClick={() => setShowRegisterForm(true)} className='py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md'>Register</button>
               <Link to='/login'> <button className='border-2 py-2 px-4 rounded-md hover:bg-green-700 hover:text-white'>Admin</button></Link>
            </div>
            <p onClick={() => setMobile(true)} className='cursor-pointer mobile-menu'><i class="fa-solid fa-bars fa-2x"></i></p>
                <div className={mobile ? 'mobile-bg show-mobile-bg' : 'mobile-bg'}>
                <div className={mobile ? 'mobile-nav show-nav p-3' :'mobile-nav  p-3'}>
                    <p onClick={() => setMobile(false)} className='text-red-700 cursor-pointer text-2xl mb-5'><i class="fa-solid fa-circle-xmark"></i></p>
                    <Link to='/' onClick={() => setMobile(false)}><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 mb-4' >Home</p></Link>
                    <Link to='/about' onClick={() => setMobile(false)}><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 mb-4' >About</p></Link>
                    <Link to='/ministries' onClick={() => setMobile(false)}><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 mb-4' >Ministries</p></Link>
                    <Link to='/events' onClick={() => setMobile(false)}><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 mb-4' >Events</p></Link>
                    <Link to='/contact' onClick={() => setMobile(false)}><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 mb-4' >Contact</p></Link>
                    <Link to='/article' onClick={() => setMobile(false)}><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 mb-4' >Blog</p></Link>
                    <Link to='/login' onClick={() => setMobile(false)}><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Admin</p></Link>
            </div>
            </div>
            
        </div>
        {showRegisterForm && (
            <div className='register-form flex items-center justify-center'>
            <div className='form-wrapper flex flex-col items-center justify-center rounded-md'>
                 <p onClick={() => setShowRegisterForm(false)}  className='text-red-700 cursor-pointer text-2xl'><i class="fa-solid fa-circle-xmark"></i></p>
                 <p className='font-semibold text-xl text-slate-600 text-center'>It's great to have you on board  please register with us</p>
                 <Tab/>
                 <div className='form-inputs flex flex-col items-center p-4'>
                    <input value={name} onChange={(e) => setName(e.target.value)} className='register-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100' type='text' placeholder="&#x1F464; Enter full name"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='register-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100' type='text' placeholder="&#x2709; Enter email"/>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className='register-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100' type='text' placeholder="&#x1F464; Enter phone"/>
                    <select value={year} onChange={(e) =>setYear(e.target.value)} className='register-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100'>
                        <option>--Year of study--</option>
                        <option value='1.1'>Year - 1.1</option>
                        <option value='1.2'>Year - 1.2</option>
                        <option value='2.1'>Year - 2.1</option>
                        <option value='2.2'>Year - 2.2</option>
                        <option value='3.1'>Year - 3.1</option>
                        <option value='3.2'>Year - 3.2</option>
                        <option value='4.1'>Year - 4.1</option>
                        <option value='4.2'>Year - 4.2</option>
                    </select>
                    <button onClick={() => handleSubmit()} className='register-student-btn py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md mt-4'>Register</button>
                     {success && <p>Registration successful<i className="fa-solid fa-thumbs-up text-green-700"></i></p>}
                 </div>
            </div>
        </div>
        )}
        
    </div>
  )
}

export default Navbar