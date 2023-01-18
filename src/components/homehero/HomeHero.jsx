import React, {useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Animation from '../animation/Animation'
import './homehero.css'
import Tab from '../tab/Tab'
import { axiosInstance } from '../../config';

function HomeHero() {
    AOS.init();
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [year, setYear] = useState('')

    const [success, setSuccess] = useState(false)

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
    <div className='homehero flex flex-col items-center justify-center'>
        <div className='container flex items-center justify-center'>
            <div  className='texts-container flex flex-col items-ceter justify-center text-white'>
                <p data-aos="fade-up" data-aos-duration="3000"  className='text-center mb-1 text-3xl font-bold title'>AN OPEN INVITATION TO</p>
                <p data-aos="fade-up" data-aos-duration="3000"  className='text-center mb-2 text-xl font-medium title-2'>MOI UNIVERSITY ANNEX CAMPUS CHRISTIAN UNION</p>
                <p data-aos="fade-up" data-aos-duration="3000"  className='text-center'>Our Theme Verse: "Isaiah 55: 6 Seek ye the LORD while He may be found, call ye upon him while he is</p>
                <button data-aos="fade-up" data-aos-duration="3000" onClick={() => setShowRegisterForm(true)} className='join-btn border-2 self-center my-2 py-2 px-4 rounded-md bg-green-700 hover:bg-green-800 hover:text-white'>JOIN US</button>
                <div data-aos="fade-up" data-aos-duration="3000" className='divider'></div>
                <div className='py-4'>
                    <p data-aos="fade-up" data-aos-duration="3000" className='text-center text-xl font-medium'>WORSHIP WITH US EVERY WEDNESDAY AND SUNDAY</p>
                    <p data-aos="fade-up" data-aos-duration="3000" className='text-center'>5:00PM - 7:00PM | 8:30AM - 12 NOON</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className='flex items-center justify-center'>
                  <a href='https://web.facebook.com/groups/371798379566643/?_rdc=1&_rdr' target='_blank'><p className='text-slate-300 hover:text-white' ><i class="fa-brands fa-square-facebook fa-2x mr-3 cursor-pointer"></i></p></a>
                  <a href='https://web.facebook.com/groups/371798379566643/?_rdc=1&_rdr' target='_black'><p className='text-slate-300 hover:text-white' ><i class="fa-brands fa-square-instagram fa-2x cursor-pointer"></i></p></a>
                  <a href='https://www.youtube.com/channel/UCN36ijLsLBm5uCqBZNZ9Hcg/videos' target='_blank'><p className='text-slate-300 hover:text-white' ><i class="fa-brands fa-square-youtube fa-2x ml-3 cursor-pointer"></i></p></a>
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
        <Animation/>   
    </div>
  )
}

export default HomeHero