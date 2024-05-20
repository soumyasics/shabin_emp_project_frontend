import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SidebarAdmin from './SidebarAdmin'
import NavbarAdmin from './NavbarAdmin'

const AllTransactionHistory = () => {
    const [detail, setDetail] = useState([{}])

    useEffect(() => {
        axios
            .get('http://localhost:3001/admin/alltransactionhistory')
            .then((res => {
                setDetail(res.data.data)
            }))
            .catch((err) => {
                setDetail(err)
            })

    }, [])
    return (
        <div className='d-flex bg-secondary-subtle ' id='wrapper'>
            <SidebarAdmin />
            <div className='w-100' id='page-content-wrapper'>
                <NavbarAdmin />
                <h3 className='my-4 mx-2 p-2 rounded text-center bg-white'>Transaction History</h3>

                <div className='table-responsive m-2'>
                    <table class="table table-bordered border-primary ">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date of Payment</th>
                                <th scope="col">Total Payment</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        {detail.map((item, index) => (
                            <tbody>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.employee_name}</td>
                                    <td>{new Date(item.date_of_payment).toLocaleDateString()}</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button class="btn btn-outline-info" type="button"><i class="bi bi-info-circle"></i> info</button>
                                    </td>
                                </tr>
                            </tbody>

                        ))}

                    </table>

                </div>
            </div>
        </div>


    )
}

export default AllTransactionHistory