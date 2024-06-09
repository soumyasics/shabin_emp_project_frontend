import React from 'react';
import SidebarAdmin from '../../Component/Admin/SidebarAdmin';
import NavbarAdmin from '../../Component/Admin/NavbarAdmin';
import { Link } from 'react-router-dom';

const Management = () => {
    

    return (
        <div className='d-flex bg-secondary-subtle' id='wrapper'>
            <SidebarAdmin />
            <div className='w-100' id='page-content-wrapper'>
                <NavbarAdmin />
                <h3 className='my-4 mx-2 p-2 rounded text-center bg-white shadow'>Management</h3>
                <div className="container d-flex flex-row mt-4">
                    <div className="p-2 m-2 rounded flex-grow-1">
                        <h5 className="text-center">Tickets</h5>
                        <div className="d-flex flex-column justify-content-around">
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-danger">
                                    <i className="bi bi-exclamation-triangle-fill"></i> High Priority Tickets
                                </p>
                                <Link to="/admin/highprioritytickets" type="button" className="btn btn-outline-danger">View</Link>
                            </div>
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-warning">
                                    <i className="bi bi-exclamation-circle-fill"></i> Medium Priority Tickets
                                </p>
                                <Link to="/admin/mediumprioritytickets" type="button" className="btn btn-outline-warning">View</Link>
                            </div>
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-success">
                                    <i className="bi bi-clock-fill"></i> Low Priority Tickets
                                </p>
                                <Link to="/admin/lowprioritytickets" type="button" className="btn btn-outline-success">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 m-2 rounded flex-grow-1 ">
                        <h5 className="text-center">Task Management</h5>
                        <div className="d-flex flex-column justify-content-around">
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-danger">
                                    <i className="bi bi-exclamation-triangle-fill"></i> High Priority Tasks
                                </p>
                                <Link to="#" type="button" className="btn btn-outline-danger">Initiate</Link>
                            </div>
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-warning">
                                    <i className="bi bi-exclamation-circle-fill"></i> Medium Priority Tasks
                                </p>
                                <Link to="#" type="button" className="btn btn-outline-warning">Initiate</Link>
                            </div>
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-success">
                                    <i className="bi bi-clock-fill"></i> Low Priority Tasks
                                </p>
                                <Link to="#" type="button" className="btn btn-outline-success">Initiate</Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 m-2 rounded flex-grow-1 ">
                        <h5 className="text-center">Announcements</h5>
                        <div className="d-flex flex-column justify-content-around">
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-danger">
                                    <i className="bi bi-exclamation-triangle-fill"></i> Critical Announcements
                                </p>
                                <Link to="#" type="button" className="btn btn-outline-danger">Initiate</Link>
                            </div>
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-warning">
                                    <i className="bi bi-exclamation-circle-fill"></i> Major Announcements
                                </p>
                                <Link to="#" type="button" className="btn btn-outline-warning">Initiate</Link>
                            </div>
                            <div className="bg-white p-2 m-1 rounded-2 border border-dark-subtle  text-center">
                                <p className="text-success">
                                    <i className="bi bi-info-circle-fill"></i> Routine Announcements
                                </p>
                                <Link to="#" type="button" className="btn btn-outline-success">Initiate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;
