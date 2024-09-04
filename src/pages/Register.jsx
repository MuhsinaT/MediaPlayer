import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkEmailApi, registerApi } from '../services/allApis'
import { useNavigate } from 'react-router-dom'




function Register() {
    const [user, setUser] = useState({
        username: "", email: "", password: ""
    })
    
    const nav=useNavigate()
    
    const handleRegister = async () => {
        console.log(user);
        const { username, email, password } = user
        if (!username || !email || !password) {
            toast.warning("Enter Valid Inputs")
        }
        else {
            const result = await checkEmailApi(email)
            console.log(result);
            if (result.data.length > 0) {
                toast.warning("Email Id Already Exists")
            }
            else {
                const result=await registerApi(user)
                if(result.status==201){
                    toast.success("success")
                    setUser({
                        username: "", email: "", password: ""
                    })
                    nav('/login')
                }
                else{
                    toast.error("Registration Failed")
                }
               
               
            }
            
        }
            
    }


    return (
        <>

            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="w-75 border-shadow  p-5" style={{
                    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}>
                    <h1 style={{ color: "black", fontSize: "1.8rem" }}>Register</h1>
                    <input type="email" className='form-control mb-3' placeholder='Enter Your Email' name="" id="" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />

                    <input type="text" className='form-control mb-3' placeholder='Enter UserName' name="" id=""
                        onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />

                    <input type="password" placeholder="Enter PassWord" name="" id="" className="form-control mb-3"
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />

                    <div className="d-flex justify-content-between">
                        <button className='btn btn-outline-danger' onClick={handleRegister}>Register</button>
                        <Link to={'/login'}>Already a User?</Link>
                    </div>
                </div>
            </div>
        </>
    )
} 
        
    



export default Register
