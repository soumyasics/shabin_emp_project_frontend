import React, { useState } from 'react'
import './Login.css'
import img1 from '../../img/LogoHermes.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate()

    function change(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function submit(e) {
        e.preventDefault()

        axios.post('http://localhost:3001/login', form,{withCredentials:true})

            .then((res) => {
                if(res.data.status===200)
                navigate('/employeehome')
            else
            {
                alert('emailid or password mismatch')
            }
            }).catch((err) => {
                console.error(err);
                alert("failed")
            });
    }

    return (
        <div class="row vh-100 g-0">
            {/* Left Side starts*/}
            <div class="col-lg-6 position-relative d-none d-lg-block">
                <div class="bg-holder" ></div>
            </div>
            {/* Left Side Ends */}

            {/* Right Side starts*/}
            <div class="col-lg-6">
                <div class="row align-items-center justify-content-center h-100 g-0 px-4 px-sm-0">
                    <div class="col col-sm-6 col-lg-7 col-xl-6 button ">

                        {/* Logo */}
                        <Link to='#' class="d-flex justify-content-center mb-4"><img src={img1} alt='' width="60" /></Link>
                        {/* Logo Ends*/}

                        <div class="text-center mb-5">
                            <h3 class="fw-bold">Log In</h3>
                            <p class="text-secondary">Get access to your account</p>
                        </div>

                        {/* Form starts*/}
                        <form onSubmit={submit} >

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-envelope-at"></i>
                                </span>
                                <input type="email" class="form-control form-control-lg fs-6" placeholder='E-mail' name='email' onChange={change} />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-lock"></i>
                                </span>
                                <input type='password' class="form-control form-control-lg fs-6" placeholder='Password' name='password' onChange={change} />
                            </div>
                            <div class="input-group mb-3 d-flex justify-content-between">
                                <div class="form-check">
                                </div>
                                <div>
                                    <small><Link to='#' class='fw-bold'>Forgot Password?</Link></small>

                                </div>
                            </div>
                            <button class='btn btn-primary mb-3' type="submit">Login</button>
                        </form>
                        {/* Form Ends*/}

                        <div class="text-center">
                            <small>Don't have an account?<Link to='/signup' class='fw-bold'> Signup</Link></small>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side Ends */}
        </div>
    )

}
export default Login