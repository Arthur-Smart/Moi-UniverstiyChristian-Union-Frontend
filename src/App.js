import {useContext, useState, useEffect} from 'react'
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Events from './pages/events/Events';
import Home from './pages/home/Home';
import Libray from './pages/library/Libray';
import Ministries from './pages/ministries/Ministries';
import Videos from './pages/videos/Videos';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';
import { LoginContext } from './LoginContext';
import ScrollToTop from './components/ScrollToTop';
import BounceLoader from "react-spinners/BounceLoader";
import SingleBlog from './pages/singleblog/SingleBlog';

function App() { 
  const {user} = useContext(LoginContext)
  const [loading, setLoading] =useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },3000)
  },[])
  return (
     <BrowserRouter>
    <div className="App">
    {loading ? (<div className='flex spinner flex-col items-center justify-center'>
        <BounceLoader
        color={'#348C05'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>) : (<>
           <ScrollToTop/>
        <Navbar/>
        <Routes> 
          <Route  exact path='/' element={ <Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/ministries' element={<Ministries/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/article' element={<Blog/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/library' element={<Libray/>}/>
          <Route path='/admin' element={user ? <Admin/> : <Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/article/:id' element={<SingleBlog/>}/>
        </Routes>
        <Footer/>
        </>
      )}
        
    </div>
    </BrowserRouter>
  );
}

export default App;
