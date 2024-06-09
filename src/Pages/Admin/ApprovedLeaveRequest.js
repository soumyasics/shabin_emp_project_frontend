import React from 'react';
import SidebarAdmin from '../../Component/Admin/SidebarAdmin';
import NavbarAdmin from '../../Component/Admin/NavbarAdmin';

const ApprovedLeaveRequest = () => {
    return (
        <div className='d-flex bg-secondary-subtle ' id='wrapper'>
            <SidebarAdmin />
            <div className='w-100' id='page-content-wrapper'>
                <NavbarAdmin />
                <h3 className='my-4 mx-2 p-2 rounded text-center bg-white shadow text-success'>Approved Leave Request</h3>

                <div className='table-responsive m-1 rounded'>
                    <table className="table table-success">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Leave type</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Larry the Bird</td>
                                <td>19473</td>
                                <td>Sick Leave</td>
                                <td>14/05/2024</td>
                                <td>14/05/2024</td>
                                <td className='text-center'>
                                    <button type='button' className='btn btn-primary'> View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    )
}

export default ApprovedLeaveRequest