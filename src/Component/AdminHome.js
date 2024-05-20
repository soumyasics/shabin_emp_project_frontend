import React from 'react'
import './AdminHome.css'
import SidebarAdmin from './SidebarAdmin'
import NavbarAdmin from './NavbarAdmin'
import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <div class="d-flex bg-secondary-subtle" id="wrapper">

      {/* Sidebar starts */}
      <SidebarAdmin />
      {/* Sidebar ends */}

      <div className='w-100' id="page-content-wrapper">

        {/* Navbar starts */}
        <NavbarAdmin />
        {/* Navbar ends */}

        <div class="container text-center border border-black bg-secondary-subtle p-3 rounded-5 ">
          <div class="row">
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



      </div>
    </div>
  )
}

export default AdminHome