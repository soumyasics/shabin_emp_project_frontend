import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../img/LogoHermes.png'
import './Sidebar.css'

function Sidebar() {
    return (

        <div class="bg-white offcanvas-md offcanvas-end" tabindex="-1" id="sidebarMenu">
            <div class="container-fluid sidebar-heading text-center py-4 primary-text fs-5 border-bottom">
                <Link class="navbar-brand" to="#">
                    <img src={img1} alt="Logo" width="50" class="d-inline-block" />
                    Hermes Systems
                </Link>
                <button type="button" class="btn-close  d-sm-none" data-bs-dismiss="offcanvas"
                    data-bs-target="#sidebarMenu" aria-label="Close"></button>
            </div>

            <div class="list-group list-group-flush my-3 " id="sidebaritem">
                <Link href="#" class="list-group-item list-group-item-action bg-transparent second-text active">
                    <i class="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
                <Link to="/employeehome" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-house me-2"></i> Home
                </Link>
                <Link to="/employee/calenderemployee" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-calendar me-2"></i> Calender
                </Link>
                <Link to="/employee/employeetasks" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-person-workspace me-2"></i> Tasks
                </Link>
                <Link to="/employee/tickets" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-ticket me-2"></i> Tickets
                </Link>
                <Link to='/employee/salary' class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-cash me-2"></i> Salary
                </Link>
                <Link href="/" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                    <i class="bi bi-box-arrow-left me-2"></i> Logout
                </Link>
            </div>
        </div>
    )
}

export default Sidebar