import React, {useState, useContext} from 'react'
import Tab from '../../components/tab/Tab'
import { LoginContext } from '../../LoginContext'
import './login.css'

function Login({setIsAuthorized}) {
  const [adminName, setAdminName] = useState('')
  const [adminPassword, setAdminPassword] = useState('')

  const {LoginAdmin, loading} = useContext(LoginContext)
  
  return (
    <div className='login flex items-center justify-center'>
        <div className='login-wrapper flex flex-col items-center justify-center rounded-md p-3'>
            <p className='text-xl font-medium text-slate-600'>Login in to continue</p>
            <p className='text-center mb-2'>Only executive members can login here</p>
            <Tab/>
            <input onChange = {(e) => setAdminName(e.target.value)} className='login-inputs border-2 py-3 mt-4 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Enter username'/>
            <input onChange = {(e) => setAdminPassword(e.target.value)} className='login-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='password' placeholder='Enter password'/>
            <button onClick ={() => LoginAdmin({adminName, adminPassword})} className='login-btn py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded-md'>{loading ? 'Loading...' : 'Login'}</button>
        </div>
    </div>
  )
}

export default Login