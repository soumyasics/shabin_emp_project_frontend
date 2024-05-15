import React from 'react'
import './EmployeeHome.css'
import img2 from '../img/Announcement.jpg'
import img3 from '../img/Report.jpg'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


function EmployeeHome() {


    return (
        <div class="d-flex  bg-secondary-subtle" id="wrapper">

            {/* Sidebar starts here */}
            <Sidebar />
            {/* Sidebar ends here */}

            <div id="page-content-wrapper">

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

                <div class="row row-cols-1 row-cols-md-2 g-5 mx-4 mt-1 ">

                    <div class="col">
                        <div class="card">
                            <h3 class="text-center mt-4">Anouncement</h3>
                            <img src={img2} class="card-img-top px-1" alt="..." height="400 %" />
                            <div class="card-body">
                                <h5 class="card-title">Detailed info</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h3 class="text-center mt-4">Events</h3>
                            <img src={img3} class="card-img-top px-1" alt="..." height="400 %" />
                            <div class="card-body">
                                <h5 class="card-title">Detailed info</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default EmployeeHome