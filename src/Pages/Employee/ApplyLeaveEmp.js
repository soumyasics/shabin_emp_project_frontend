// Employee leave request form
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Component/Employee/Sidebar';
import Navbar from '../../Component/Employee/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ApplyLeaveEmp = () => {
    const [form, setForm] = useState({
        employee_name: '',
        employee_id: '',
        designation: '',
        from: '',
        to: '',
        typeOfLeave: '',
        reason: '',
    })
    const navigate= useNavigate()
    useEffect(() => {
        axios
            .get('http://localhost:3001/employee/employeeprofile', { withCredentials: true })
            .then((res) => {
                setForm(res.data)
            })
            .catch((err) => {
                console.log(err);
                alert('Something went wrong')
            })
    }, [])
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        axios
            .post('http://localhost:3001/employee/leaveapply', form, {withCredentials:true})
            .then((res) => {
                console.log(res);
                alert('Leave Applied Successfully');
                navigate('/employee/calenderemployee')
            })
            .catch((err) => {
                console.log(err);
                alert('Something Went Wrong');
            })
    }

    return (
        <div className='d-flex bg-secondary-subtle' id='wrapper'>
            <Sidebar />
            <div className='w-100' id='page-content-wrapper'>
                <Navbar />
                <h3 className='my-4 mx-2 p-2 rounded text-center bg-white shadow'>Apply Leave</h3>
                <div className='container'>
                    <form className='row g-3'>
                        <div className='col-md-4'>
                            <label htmlFor='employeename' className='form-label'>Employee Name</label>
                            <input className='form-control' id='employeename'
                                type='text'
                                name='employee_name'
                                value={form.employee_name}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor='employeeid' className='form-label'>Employee ID</label>
                            <input className='form-control' id='employeeid'
                                type="number"
                                name='employee_id'
                                value={form.employee_id}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor='designation' className='form-label'>Designation</label>
                            <input className='form-control' id='designation'
                                type='text'
                                name='designation'
                                value={form.designation}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor='employeename' className='form-label'>From</label>
                            <input className='form-control' id='employeename'
                                type="date"
                                name='from'
                                value={form.from}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor='employeename' className='form-label'>To</label>
                            <input className='form-control' id='employeename'
                                type="date"
                                name='to'
                                value={form.to}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor='typeofleave' className='form-label'>Type Of Leave</label>
                            <select className='form-select' aria-label='Default select example' id='typeofleave'
                                name='typeOfLeave'
                                value={form.typeOfLeave}
                                onChange={handleOnChange}
                            >
                                <option selected>Choose</option>
                                <option>Sick leave</option>
                                <option>Casual leave</option>
                                <option>Leave without pay</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Reason</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                type='textarea'
                                name='reason'
                                value={form.reason}
                                onChange={handleOnChange}
                            ></textarea>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary bg-success" onClick={handleSubmit}><i class="bi bi-upload"></i> Apply</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default ApplyLeaveEmp