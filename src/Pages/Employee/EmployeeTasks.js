import React from 'react';
import Sidebar from '../../Component/Employee/Sidebar';
import Navbar from '../../Component/Employee/Navbar';

const EmployeeTasks = () => {
    return (
        <div className='d-flex bg-secondary-subtle' id='wrapper'>
            <Sidebar />
            <div className='w-100' id='page-content-wrapper'>
                <Navbar />
                <h3 className='my-4 mx-2 p-2 rounded text-center bg-white shadow'>Allocated Tasks</h3>
                <div className='m-3'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">Task</th>
                                <th scope="col">Date of Allocation</th>
                                <th scope="col">Final Date</th>
                                <th scope="col">Task priority</th>
                                <th scope="col" className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td className='text-center' style={{ width: '200px' }}>
                                    <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: '70px' }}>Done</button>
                                    {/* Modal  start*/}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Conformation</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p className='fw-bold'>Are you sure you have completed the task?</p>

                                                </div>
                                                <div class="modal-footer">
                                                    <div className='d-flex'>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                        <button type="button" className="btn btn-primary ms-2" >Done</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Model Ends */}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default EmployeeTasks