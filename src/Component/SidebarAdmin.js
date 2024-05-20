import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../img/LogoHermes.png'
import './SidebarAdmin.css'

function SidebarAdmin() {
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
                <Link to="" class="list-group-item list-group-item-action bg-transparent second-text active">
                    <i class="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
                <Link to="/adminhome" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-house me-2"></i> Home
                </Link>
                <Link to="/admin/addemployees" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-kanban me-2"></i> Add Employee
                </Link>
                <Link to="/admin/timesheet" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-calendar3 me-2"></i> Time Sheet
                </Link>
                <Link to="/allemployees" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-people me-2"></i> Employees
                </Link>
                <Link to="/allsalary" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-cash-stack me-2"></i> Payment
                </Link>
                <Link to="/admin/transactionhistoty" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-cash-stack me-2"></i> Transaction History
                </Link>
                <Link to="/" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                    <i class="bi bi-box-arrow-left me-2"></i> Logout
                </Link>
            </div>
        </div>
    )
}

export default SidebarAdmin