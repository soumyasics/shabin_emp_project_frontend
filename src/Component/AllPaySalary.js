// To select a particular employee to paysalary
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SidebarAdmin from './SidebarAdmin'
import NavbarAdmin from './NavbarAdmin'


function AllPaySalary() {
    const [detail, setDetail] = useState([{}])

    useEffect(() => {
        axios.get('http://localhost:3001/allemployee')
            .then((res => {
                setDetail(res.data.data)
            }))
            .catch((err => {
                setDetail(err)
            }))
    }, [])


    return (

        <div class="d-flex  bg-secondary-subtle" id='wrapper'>
            {/* Sidebar starts */}
            <SidebarAdmin />
            {/* Sidebar ends */}

            <div class="page-content-wrapper">
                {/* Navbar starts */}
                <NavbarAdmin />
                {/* Navbar Ends */}

                <h3 class="my-4 mx-2 p-2 rounded text-center bg-white">Employee Details</h3>

                <div class="container-fluid">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Join Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {detail.map((a) => (
                            <tbody>
                                <tr>
                                    <th scope="row">{a.employee_name}</th>
                                    <td>{a.Designation}</td>
                                    <td>{new Date(a.date_of_joining).toLocaleDateString()}</td>
                                    <td><Link to={`/paysalary/${a._id}`}><button type="button" class="btn btn-primary btn-sm">Pay Salary</button></Link></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>

                </div>
            </div>
        </div>

    )
}

export default AllPaySalary