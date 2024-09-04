import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  return (
    <>
    <Header/>
<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/history' element={<History/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/reg' element={<Register/>}/>

</Routes>
<Footer/>

<ToastContainer/>


 </>
  )
}

export default App
