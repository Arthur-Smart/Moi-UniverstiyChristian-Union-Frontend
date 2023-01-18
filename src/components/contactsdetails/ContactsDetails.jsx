import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './contactsdetails.css'

function ContactsDetails() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const formRef = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_c6tnz4m', 'template_6yumweh', formRef.current, 'QQqa5EKSN4pbb0IgD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setName('')
            setEmail('')
            setMessage('')
}

  return (
    <div className='contacts-details flex items-center justify-center py-10'>
        <div className='container contacts-wrapper flex  justify-between'>
            <div className='contact-left'>
                <form ref={formRef} onSubmit={handleSubmit} className='rounded-md border-2 flex flex-col items-center py-2'>
                    <div className='inputs-wrapper flex items-center justify-center gap-3'>
                        <div className='input-wrapper'>
                            <label className='font-medium text-slate-600'>Your Name *</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} name="user_name"  className='contact-inputs border-2 py-3 px-1 mb-1 rounded-md outline-green-100 ' type='text' placeholder="&#x1F464; Full Name" required/>
                        </div>
                        <div className='input-wrapper'>
                            <label className='font-medium text-slate-600' >Your Email *</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} name="user_email" className='contact-inputs border-2 py-3 px-1 mb-1 rounded-md outline-green-100 ' type='email' placeholder="&#x2709; Enter Email" required/>
                        </div>
                    </div>
                    <div className='textarea-container mt-3'>
                        <p className='font-medium text-slate-600'>Write comment *</p>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" className='contact-textarea border-2 py-3 px-1 mb-1 rounded-md outline-green-100 ' placeholder="&#x1F4E7; Message" required></textarea>
                    </div>
                    <button className='contact-btn py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md'>Submit</button>
                </form>
            </div>
            <div className='contact-right'>
                <p className='font-bold text-gray-600 text-2xl'>Our contacts details</p>
                <p  className='font-medium text-gray-600 '>Your questions, comments, inquiries and more are much welcomed. Lets connect.</p>
                <div className='mt-3'>
                    <p className='mb-1' ><i class="fa-regular fa-envelope"></i> <strong>Email:</strong> muaccu@gmail.com</p>
                    <p className='mb-1' ><i class="fa-solid fa-phone"></i> <strong>Phone:</strong> 0758948674</p>
                    <p className='mb-1' ><i class="fa-solid fa-location-dot"></i> <strong>Location:</strong> Annex, Eldoret Kenya</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactsDetails