import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
        <div className='table-responsive'>
            <table class="table table-bordered border-primary">
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
                            <th scope="row">{index+1}</th>
                            <td>{item.employee_name }</td>
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

    )
}

export default AllTransactionHistory