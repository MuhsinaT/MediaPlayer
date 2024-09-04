import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginApi } from '../services/allApis'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {


    const [user,setUser]=useState({
        email:"",password:""
    })

    const nav=useNavigate()
    const handleLogin=async()=>{
        console.log(user);
        const{email,password}=user
        if(!email || !password){
            toast.warning("Enter Valid Inputs")
        }
        else{
            const result=await loginApi(email,password)
            if(result.status==200){
                if(result.data.length>0){
                    console.log(result.data[0]);
                    sessionStorage.setItem('userData',JSON.stringify(result.data[0]))
                    
                    toast.success("Login scuccessfull")
                    nav('/home')
                    setUser({
                        email:"",password:""
                    })
                    
                }
                else{
                    toast.warning("Invalid Email/Password")
                }
            }
            else{
                toast.error("Something Went Wrong")
            }
        }
        
    }

  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
        <div className="w-75 border-shadow  p-5" style={{
                    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}>
            <h1 style={{color:'black',fontSize:"1.9rem"}}>Login</h1>
            <input type="email" className='form-control mb-3' placeholder='Enter Your Email' name="" id="" 
            onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
            <input type="password"  placeholder="Enter PassWord" name="" id="" className="form-control mb-3" 
              onChange={(e)=>{setUser({...user,password:e.target.value})}}/>

            <div className="d-flex justify-content-between">
                <button className='btn btn-outline-danger' onClick={handleLogin}>Login</button>
                <Link to={'/reg'}>New User?</Link>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login
