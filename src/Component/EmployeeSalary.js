import React from 'react';
import './EmployeeSalary.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const EmployeeSalary = () => {
    return (
        <div class="d-flex  bg-secondary-subtle" id="wrapper">

            {/* Sidebar starts here */}
            <Sidebar />
            {/* Sidebar ends here */}

            <div className='w-100' id="page-content-wrapper">

                {/* Navigation bar starts here */}
                <Navbar />
                {/* Navigation bar Ends here */}

                <div class="container text-center border border-black bg-secondary-subtle p-3 rounded-5">
                    <div class="row ">
                        <div class="col ">
                            <div class="row ">
                                <div class="col ">
                                    <Link to="#"><button type="button" class="btn btn-outline-primary"><i class="bi bi-suitcase-lg-fill"></i> Current Task</button></Link>
                                </div>
                                <div class="col">
                                    <Link to="#"><button type="button" class="btn btn-outline-primary"><i class="bi bi-clipboard-data-fill"></i> Allocated Task</button></Link>
                                </div>
                                <div class="col ">
                                    <Link to="#"><button type="button" class="btn btn-outline-primary"><i class="bi bi-bell-fill"></i> Notification</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeSalary