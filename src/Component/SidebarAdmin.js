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
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active">
                    <i class="bi bi-speedometer2 me-2"></i> Dashboard
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-house me-2"></i> Home
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-kanban me-2"></i> Management
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-calendar3 me-2"></i> Time Sheet
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-people me-2"></i> Employees
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="bi bi-cash-stack me-2"></i> Transactions
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                    <i class="bi bi-box-arrow-left me-2"></i> Logout
                </a>
            </div>
        </div>
    )
}

export default SidebarAdmin