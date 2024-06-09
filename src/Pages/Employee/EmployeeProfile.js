import React, { useEffect, useState } from 'react'
import Sidebar from '../../Component/Employee/Sidebar'
import Navbar from '../../Component/Employee/Navbar'
import img1 from '../../img/LogoHermes.png'
import axios from 'axios'


function EmployeeProfile() {
    const [details, setDetails] = useState('')
    useEffect(() => {
        axios
            .get('http://localhost:3001/employee/employeeprofile', { withCredentials: true })
            .then((res => {
                setDetails(res.data)
                console.log(res.data);
            }))
            .catch((err => {
                console.error('Error in fetching employee details', err.response)
            }))
    }, [])
    return (
        <div className="d-flex bg-secondary-subtle" id='wrapper'>
            {/* Sidebar starts */}
            <Sidebar />
            {/* Sidebar ends */}

            <div className='w-100' id='page-content-wrapper'>
                {/*Navbar starts  */}
                <Navbar />
                {/*Navbar starts  */}

                {/* Content starts here */}
                <h3 className="my-4 mx-2 p-2 rounded text-center bg-white shadow">Profile</h3>
                <div className='d-flex justify-content-between m-3 bg-white p-2 rounded'>
                    <div className='text-center'>
                        <img className='rounded-circle img-fluid w-75 shadow' src={img1} alt='profile' />
                        <h4 className='text-success text-uppercase'>{details.employee_name}</h4>
                        <h6 className='fw-bold'><i className="bi bi-suitcase-lg"></i> {details.designation}</h6>
                    </div>
                    <div className='text-center p-5'>
                        <p><i className="bi bi-envelope"></i> Email ID: {details.email}</p>
                        <p><i className="bi bi-telephone"></i> Phone: {details.primary_phone}</p>
                        <p>Date of joining: {new Date(details.date_of_joining).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='w-100 ms-3 me-3 p-3 bg-white rounded'>
                        <p className='fs-5 text-body-secondary text-center shadow rounded'> Address</p>
                        <p >House no: {details.house_number} </p>
                        <p>Street name:{details.street_name} </p>
                        <p>City: {details.city} </p>
                        <p>Landmark: {details.landmark}</p>
                        <p>Zip: {details.zip} </p>
                        <p>District: {details.district} </p>
                        <p>State: {details.state} </p>
                        <p>Country: {details.country} </p>
                    </div>
                    {/* <div className='w-50 me-3 ms-1 p-3 bg-white rounded'>
                        <p className='fs-5 text-body-secondary text-center shadow rounded'>Present Adress</p>
                        <p >House no: {details.house_number} </p>
                        <p>Street name: {details.street_name} </p>
                        <p>City: {details.city} </p>
                        <p>Landmark: </p>
                        <p>Zip: </p>
                        <p>District: </p>
                        <p>State: </p>
                        <p>Country </p>
                    </div> */}
                </div>
                <div className='d-flex'>
                    <div className='w-50 mt-3 ms-3 me-1 p-3 bg-white rounded text-center'>
                        <p className='fs-5 text-body-secondary text-center shadow '>Educational Details</p>
                        <h6 className='text-center fw-bold'>Course 1</h6>
                        <p>Course Name: {details.course}</p>
                        <p>Passout Year: {details.passout_year}</p>
                        <p>Institute: {details.institute}</p>
                        <h6 className='text-center fw-bold'>Course 2</h6>
                        <p>Course Name: {details.course_1}</p>
                        <p>Passout Year: {details.passout_year_1}</p>
                        <p>Institute: {details.institute_1}</p>
                        <h6 className='text-center fw-bold'>Course 3</h6>
                        <p>Course Name: {details.course_2}</p>
                        <p>Passout Year: {details.passout_year_2}</p>
                        <p>Institute: {details.institute_2}</p>
                    </div>
                    <div className='w-50 mt-3 me-3 ms-1 p-3 bg-white rounded text-center'>
                        <p className='fs-5 text-body-secondary text-center shadow rounded'>Other Statutory information</p>
                        <h6 className='text-center fw-bold'>ID Details</h6>
                        <p>Aadhar no: {details.aadhar_no}</p>
                        <p>PAN no: {details.pan_no}</p>
                        <p>PF no: {details.pf_no}</p>
                        <h6 className='text-center fw-bold'>Bank Details</h6>
                        <p>Bank name: {details.bank}</p>
                        <p>Account no: {details.account_no}</p>
                        <p>IFSC Code:{details.ifsc_code}</p>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default EmployeeProfile