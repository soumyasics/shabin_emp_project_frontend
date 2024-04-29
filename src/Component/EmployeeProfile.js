import React from 'react'
import './EmployeeProfile.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import img1 from '../img/LogoHermes.png'


function EmployeeProfile() {
    return (
        <div class="d-flex bg-secondary-subtle" id='wrapper'>
            {/* Sidebar starts */}
            <Sidebar />
            {/* Sidebar ends */}

            <div id='page-content-wrapper'>
                {/*Navbar starts  */}
                <Navbar />
                {/*Navbar starts  */}
                <div class="container pt-3 pb-3 py-3">

                    <div class="row mt-4">
                        {/* <div class="col-12 col-sm-6 col-md-4 mt-2 col-lg-3 "> */}
                            <div class="card">
                                <div class="row">
                                    <div class="col-12 col-sm-12">
                                        <img src={img1} alt="Logo" width="200" class="d-inline-block rounded" />
                                    </div>
                                    <div class="col-12 col-sm-12">
                                        <div class="card-body">
                                            <h2 class="mb-3">Post Title 1</h2>
                                            <p>Date: Feb 15, 2024</p>
                                            <p>This is the content of post 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-12 col-sm-6 col-md-4 mt-2 col-lg-3">
                            <div class="card">
                                <div class="row">
                                    <div class="col-6 col-sm-12">
                                        <img class="img-fluid rounded h-100 w-100" src={img1} alt="" />
                                    </div>
                                    <div class="col-6 col-sm-12">
                                        <div class="card-body">
                                            <h2 class="mb-3">Post Title 2</h2>
                                            <p>Date: Feb 16, 2024</p>
                                            <p>This is the content of post 2</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mt-2 col-lg-3">
                            <div class="card">
                                <div class="row">
                                    <div class="col-6 col-sm-12">
                                        <img class="img-fluid rounded h-100 w-100" src={img1} alt="" />
                                    </div>
                                    <div class="col-6 col-sm-12">
                                        <div class="card-body">
                                            <h2 class="mb-3">Post Title 3</h2>
                                            <p>Date: Feb 17, 2024</p>
                                            <p>This is the content of post 3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    {/* </div> */}

                </div>


            </div>



        </div >
    )
}

export default EmployeeProfile