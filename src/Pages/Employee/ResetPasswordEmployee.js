import React, { useState } from 'react'
import img1 from '../../img/LogoHermes.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ResetPasswordEmployee = () => {
    const [form, setForm] = useState({ email: '', newpassword: '', confirmpassword: '' })
    const navigate = useNavigate()
    function change(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function submit(e) {
        e.preventDefault()
        if (form.newpassword !== form.confirmpassword) {
            alert('Password do not match')
            return;
        }
        else {
            axios
                .post('http://localhost:3001/resetpassword', {
                    email: form.email,
                    newpassword: form.newpassword
                })
                .then(() => {
                    alert('Password reset successful')
                    navigate('/login')
                })
                .catch((err) => {
                    console.error('Error resetting password',err)
                    alert('Error resetting password')
                })
        }
    }
    return (
        <div className="row vh-100 g-0">
            {/* Left Side */}
            <div className="col-lg-6 position-relative d-none d-lg-block">
                <div className="bg-holder" ></div>
            </div>
            {/* Left Side Ends */}

            {/* Right Side */}
            <div className="col-lg-6">
                <div className="row align-items-center justify-content-center h-100 g-0 px-4 px-sm-0">
                    <div className="col col-sm-6 col-lg-7 col-xl-6 button ">

                        {/* Logo */}
                        <Link to='#' className="d-flex justify-content-center mb-4"><img src={img1} alt='' width="60" /></Link>
                        {/* Logo Ends*/}

                        <div className="text-center mb-5">
                            <h3 className="fw-bold">Reset Password</h3>
                            <p className="text-secondary">Employee</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={submit} >

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-person-vcard"></i>
                                </span>
                                <input type='text' className="form-control form-control-lg fs-6" placeholder='Email ID' name='email' onChange={change} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-lock"></i>
                                </span>
                                <input type='password' className="form-control form-control-lg fs-6 " placeholder='New password' name='newpassword' onChange={change} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-lock-fill"></i>
                                </span>
                                <input type='password' className="form-control form-control-lg fs-6" placeholder='Confirm password' name='confirmpassword' onChange={change} />
                            </div>

                            <button className='btn btn-primary mb-3' type="submit">Reset</button>
                        </form>
                        {/* Form Ends*/}

                        <div className="text-center">
                            <small>Don't have an account? <Link to='/signup' className='fw-bold'>Signup</Link></small>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side Ends */}
        </div>
    )
}

export default ResetPasswordEmployee