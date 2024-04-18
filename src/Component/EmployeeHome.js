import React from 'react'
import './EmployeeHome.css'
import img1 from '../img/LogoHermes.png'
import img2 from '../img/Announcement.jpg'
import img3 from '../img/Report.jpg'
import { Link } from 'react-router-dom'
function EmployeeHome() {
    return (
        <>
            <div class="d-flex bg-colo bg-secondary-subtle" id="wrapper">

                {/* Sidebar starts here */}
                <div class="bg-white" id="sidebar-wrapper">
                    <div class="container-fluid sidebar-heading text-center py-4 primary-text fs-5 border-bottom">
                        <Link class="navbar-brand" to="#">
                            <img src={img1} alt="Logo" width="50" class="d-inline-block" />
                            Hermes Systems
                        </Link>
                    </div>

                    <div class="list-group list-group-flush my-3 " id="sidebaritem">
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active">
                            <i class="bi bi-speedometer2 me-2"></i> Dashboard
                        </a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i class="bi bi-house me-2"></i> Home
                        </a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i class="bi bi-calendar me-2"></i> Calender
                        </a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i class="bi bi-person-workspace me-2"></i> Projects
                        </a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i class="bi bi-ticket me-2"></i> Tickets
                        </a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i class="bi bi-gift me-2"></i> Products
                        </a>
                        <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                            <i class="bi bi-box-arrow-left me-2"></i> Logout
                        </a>
                    </div>
                </div>
                {/* Sidebar ends here */}

                <div id="page-content-wrapper">

                    {/* Navigation bar starts here */}
                    <nav class="navbar navbar-expand-lg navbar-light bg-transparent p-4">

                        <div class="d-flex align-item-center">
                            <button class="toggler me-2" type="button" data-bs-toggle="collapse"
                                data-bs-target="#sidebar-wrapper" aria-controls="#sidebar-wrapper"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <h2 class="fs-2 m-0"> Dashboard</h2>
                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle second-text fw-bold" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-person me-0"></i>John Doe
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a href="#" class="dropdown-item">Profile</a></li>
                                        <li><a href="#" class="dropdown-item">Settings</a></li>
                                        <li><a href="#" class="dropdown-item">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* Navigation bar Ends here */}

                    <div class="container text-center border border-black bg-secondary-subtle p-3 rounded-5">
                        <div class="row ">
                            <div class="col ">
                                <div class="row ">
                                    <div class="col ">
                                        <Link to="#"><button type="button" class="btn btn-outline-primary"><i class="bi bi-suitcase-lg-fill"></i> Current Project</button></Link>
                                    </div>
                                    <div class="col">
                                        <Link to="#"><button type="button" class="btn btn-outline-primary"><i class="bi bi-clipboard-data-fill"></i> Allocated Projected</button></Link>
                                    </div>
                                    <div class="col ">
                                        <Link to="#"><button type="button" class="btn btn-outline-primary"><i class="bi bi-bell-fill"></i> Priority notification</button></Link>
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
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <h3 class="text-center mt-4">Events</h3>
                                <img src={img3} class="card-img-top px-1" alt="..." height="400 %" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default EmployeeHome