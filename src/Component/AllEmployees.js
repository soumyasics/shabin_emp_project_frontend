import React from 'react'
import SidebarHr from './SidebarHr'
import NavbarHr from './NavbarHr'



function AllEmployees() {
    return (


        <div class="d-flex  bg-secondary-subtle" id='wrapper'>
            {/* Sidebar starts */}
            <SidebarHr />
            {/* Sidebar ends */}

            <div class="page-content-wrapper">
                {/* Navbar starts */}
                <NavbarHr />
                {/* Navbar Ends */}

                <h3 class="my-4 mx-2 p-2 rounded text-center bg-white">Employee Details</h3>

                <div class="container-fluid">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Join Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Shabin</th>
                                <td>Developer</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ajin</th>
                                <td>Data Scientist</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ramesh</th>
                                <td>Tester</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ramesh</th>
                                <td>Tester</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ramesh</th>
                                <td>Tester</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ramesh</th>
                                <td>Tester</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ramesh</th>
                                <td>Tester</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ramesh</th>
                                <td>Tester</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ramesh</th>
                                <td>Tester</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Ramesh</th>
                                <td>Tester</td>
                                <td>12/04/2002</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>





    )
}

export default AllEmployees