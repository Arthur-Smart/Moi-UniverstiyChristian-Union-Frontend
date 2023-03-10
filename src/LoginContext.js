import { useState, createContext } from "react";

const LoginContext = createContext()

const ContextProvider = ({children}) =>{

     const admin = 'exec@login.com'
     const password = 'exec12!pass591@@'
     const user = JSON.parse(localStorage.getItem('user'))

    const LoginAdmin = ({adminName, adminPassword}) => {
    if(adminName !== admin){
      alert('Incorrect username')
    } else if(adminPassword !== password ){
      alert('Incorrect password')
    }  else {
      localStorage.setItem('user' , JSON.stringify({admin, password}))
      window.location.replace('/admin')      
    }   
  }

  const LogoutAdmin = () => {
    console.log('Ayeya')
    localStorage.removeItem('user')
    window.location.replace('/login')
  }

  return (
    <LoginContext.Provider value={{LoginAdmin, LogoutAdmin, user}}>
        {children}
    </LoginContext.Provider>
  )
}

export {ContextProvider, LoginContext}