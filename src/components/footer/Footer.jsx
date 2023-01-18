import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './footer.css'

function Footer() {
      const formRef = useRef()
      const [email, setEmail] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_c6tnz4m', 'template_w42htri', formRef.current, 'QQqa5EKSN4pbb0IgD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setEmail('')
}

  return (
    <div className='footer bg-green-700 flex  justify-center py-7'>
        <div className='container footer-wrapper flex  justify-between'>
            <div className='footer-left'>
                <p className='text-white font-medium text-xl'>Unity in Christ </p>
                <p className='text-white'>Phone: 0786948594 | muaccu@gmail.com</p>
                <div className='flex items-center'>
                    <a href='https://web.facebook.com/groups/371798379566643/?_rdc=1&_rdr' target='_blank'><p className='cursor-pointer text-white text-xl ' ><i class="fa-brands fa-square-facebook hover:text-red-600"></i></p></a>
                    <a href='https://web.facebook.com/groups/371798379566643/?_rdc=1&_rdr' target='_black'><p className='cursor-pointer text-white text-xl ml-2 ' ><i class="fa-brands fa-square-instagram hover:text-red-600"></i></p></a>
                    <a href='https://www.youtube.com/channel/UCN36ijLsLBm5uCqBZNZ9Hcg/videos' target='_blank'><p className='cursor-pointer text-white text-xl ml-2 ' ><i class="fa-brands fa-square-youtube hover:text-red-600"></i></p></a>
                </div>
            </div>
            <div className='footer-right flex flex-col'>
                <p className='text-white font-medium text-xl sub-title text-end'>Subcribe to our news letter</p>
                <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col footer-sub items-end'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='subscribe-inputs border-2 py-3 px-1 mb-1 rounded-md outline-green-100 ' type='email' placeholder='Enter email'/>
                    <button className=' subscribe-btn py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer