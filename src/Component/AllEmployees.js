import React from 'react'
import img1 from '../img/LogoHermes.png'
import { Link } from 'react-router-dom'


function AllEmployees() {
    return (
        <>
            <div class="container pt-3 pb-3 py-3">

                <div class="row mt-4">
                    <div class="col-12 col-sm-6 col-md-4 mt-2 col-lg-3 ">
                        <div class="card">
                            <div class="row">
                                <div class="col-6 col-sm-12">
                                    <img class="img-fluid rounded h-100 w-100" src={img1} alt="" />
                                </div>
                                <div class="col-6 col-sm-12">
                                    <div class="card-body">
                                        <h2 class="mb-3">Post Title 1</h2>
                                        <p>Date: Feb 15, 2024</p>
                                        <p>This is the content of post 1</p>
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
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 mt-2 col-lg-3">
                        <div class="card">
                            <div class="row">
                                <div class="col-6 col-sm-12">
                                    <img class="img-fluid rounded h-100 w-100" src={img1} alt="" />
                                </div>
                                <div class="col-6 col-sm-12">
                                    <div class="card-body">
                                        <h2 class="mb-3">Post Title 4</h2>
                                        <p>Date: Feb 15, 2024</p>
                                        <p>This is the content of post 4</p>
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
                                        <h2 class="mb-3">Post Title 5</h2>
                                        <p>Date: Feb 16, 2024</p>
                                        <p>This is the content of post 5</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 mt-2 col-lg-3">
                        <div class="card">
                            <div class="row">
                                <div class="col-6 col-sm-12">
                                    <img class="img-fluid rounded w-100 h-100" src={img1} alt="" />
                                </div>
                                <div class="col-6 col-sm-12">
                                    <div class="card-body">
                                        <h2 class="mb-3">Post Title 6</h2>
                                        <p>Date: Feb 17, 2024</p>
                                        <p>This is the content of post 6</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>

    )
}

export default AllEmployees