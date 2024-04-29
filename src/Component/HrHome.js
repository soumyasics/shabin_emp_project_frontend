import React from 'react'
import SidebarHr from './SidebarHr'
import NavbarHr from './NavbarHr'

function HrHome() {
  return (
    <div class="d-flex  bg-secondary-subtle" id="wrapper">

        {/* Sidebar starts */}
        <SidebarHr/>
        {/* Sidebar ends */}

        <div id="page-content-wrapper">
            {/* Navbar starts */}
            <NavbarHr/>
            {/* Navbar ends */}

             {/* Payment starts here */}
             <form class="row g-3 m-0 bg-secondary-subtle">

                </form>
                {/* Payment Ends here    */}


        </div>

    </div>
  )
}

export default HrHome