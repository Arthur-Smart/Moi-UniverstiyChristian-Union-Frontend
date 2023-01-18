import React from 'react'
import ContactsDetails from '../../components/contactsdetails/ContactsDetails'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-top flex flex-col items-center justify-center bg-green-700 px-4'>
            <div className='container flex flex-col py-10'>
                <p className='text-white text-2xl font-bold'>Contact us. Moi University Annex Campus Christian Union contact center</p>
                <p className='text-white'>We respond to your call | mail | text as soon as possible</p>
            </div>
        </div>
        <ContactsDetails/>
    </div>
  )
}

export default Contact