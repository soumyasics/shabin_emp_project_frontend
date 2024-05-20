import React from 'react';
import './AdminTimeSheet.css';
import SidebarAdmin from './SidebarAdmin';
import NavbarAdmin from './NavbarAdmin';
const AdminTimeSheet = () => {
    return (
        <div className='d-flex bg-secondary-subtle' id='wrapper'>
            <SidebarAdmin />
            <div className='w-100' id='page-content-wraper'>
                <NavbarAdmin />
            </div>
        </div>

    )
}

export default AdminTimeSheet