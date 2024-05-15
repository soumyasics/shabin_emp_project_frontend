import React, { useState } from 'react'
import './HRsignup.css'
import img1 from '../img/LogoHermes.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function HRsignup() {
  
    const [form, setForm] = useState({ fullname: '', employeeid: '', email: '', newpassword: '', confirmpassword:'' })
    const navigate=useNavigate()
    function change(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    function submit(e) {
        let newpassword=form.newpassword;
        let confirmpassword=form.confirmpassword;

        if (confirmpassword===newpassword){
            e.preventDefault()
        axios.post('http://localhost:3001/hrsignup',form)
        .then((res)=>{
            console.log(res.data);
            alert("You are signed Up sucessfully")
            navigate('/hrlogin')
        })
        .catch((err)=>{
            console.error(err);
        })

        }
        else{
            alert("Passwords aren't Matching")
        }        
    }   

    return (
        <div class="row vh-100 g-0">
            {/* Left Side */}
            <div class="col-lg-6 position-relative d-none d-lg-block">
                <div class="bg-holder" ></div>
            </div>
            {/* Left Side Ends */}

            {/* Right Side */}
            <div class="col-lg-6">
                <div class="row align-items-center justify-content-center h-100 g-0 px-4 px-sm-0">
                    <div class="col col-sm-6 col-lg-7 col-xl-6 button ">

                        {/* Logo */}
                        <Link to='#' class="d-flex justify-content-center mb-4"><img src={img1} alt='' width="60" /></Link>
                        {/* Logo Ends*/}

                        <div class="text-center mb-5">
                            <h3 class="fw-bold">Sign Up</h3>
                            <p class="text-secondary">HR</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={submit}>
                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-person "></i>
                                </span>
                                <input type='text' class="form-control form-control-lg fs-6 " placeholder='Full name' name='fullname' onChange={change} />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-person-vcard"></i>
                                </span>
                                <input type='text' class="form-control form-control-lg fs-6" placeholder='Employee ID' name='employeeid' onChange={change}/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-envelope-at"></i>
                                </span>
                                <input type="email" class="form-control form-control-lg fs-6 " placeholder='E-mail' name='email' onChange={change} />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-lock"></i>
                                </span>
                                <input type='password' class="form-control form-control-lg fs-6 " placeholder='New password' name='newpassword' onChange={change} />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-lock-fill"></i>
                                </span>
                                <input type='password' class="form-control form-control-lg fs-6" placeholder='Confirm password' name='confirmpassword' onChange={change} />
                            </div>

                            <button class='btn btn-primary mb-3' type="submit" >Signup</button>
                        </form>
                        {/* Form Ends*/}

                        <div class="text-center">                            
                            <small>Already have an account? <Link to='/hrlogin' class='fw-bold'> Login</Link></small>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side Ends */}
        </div>
    )
}

export default HRsignup