// To enter employee complete information by HR manager or by Admin 
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../img/LogoHermes.png'


function EmployeeForum() {
    return (
        <>
            <div class="d-flex bg-secondary-subtle" id="wrapper">

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

                {/* Form Body starts here  */}
                <form class="row g-3">
                    <div>
                        <h4 class="text-center p-4">Edit Employee Profile</h4>
                        <hr></hr>
                    </div>
                    <div class="col-md-4">
                        <label for="emploueename4" class="form-label">Employee Name</label>
                        <input type="text" class="form-control" id="emploueename4" />
                    </div>
                    <div class="col-md-4">
                        <label for="employeeid4" class="form-label">Employee ID</label>
                        <input type="number" class="form-control" id="employeeid4" />
                    </div>
                    <div class="col-md-4">
                        <label for="dateofbirth4" class="form-label">Date of birth</label>
                        <input type="date" class="form-control" id="dateofbirth4" />
                    </div>
                    <div class="col-md-4">
                        <label for="designation4" class="form-label">Designation</label>
                        <select class="form-select" aria-label="Default select example" id='designation4'>
                            <option selected>Choose</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="project4" class="form-label">Project</label>
                        <input type="text" class="form-control" id="project4" />
                    </div>
                    <div class="col-md-4">
                        <label for="unknown4" class="form-label">Unknown</label>
                        <input type="text" class="form-control" id="unknown4" />
                    </div>

                    <p class="fw-bolder mb-0 mt-5 ps-4">Permanent Adress</p>
                    <div class="col-md-3">
                        <label for="housenumber4" class="form-label">House Number</label>
                        <input type="text" class="form-control" id="housenumber4" placeholder="1234" />
                    </div>
                    <div class="col-md-3">
                        <label for="streetname4" class="form-label">Street Name</label>
                        <input type="text" class="form-control" id="streetname4" placeholder="Main St" />
                    </div>
                    <div class="col-md-3">
                        <label for="city4" class="form-label">City</label>
                        <input type="text" class="form-control" id="city4" placeholder="Trivandrum" />
                    </div>
                    <div class="col-md-3">
                        <label for="landmark4" class="form-label">Land Mark</label>
                        <input type="text" class="form-control" id="landmark4" placeholder="Near..." />
                    </div>
                    <div class="col-md-3">
                        <label for="zip4" class="form-label">ZIP</label>
                        <input type="text" class="form-control" id="zip4" placeholder="435678" />
                    </div>
                    <div class="col-md-3">
                        <label for="district4" class="form-label">District</label>
                        <input type="text" class="form-control" id="district4" placeholder="Trivandrum" />
                    </div>
                    <div class="col-md-3">
                        <label for="state4" class="form-label">State</label>
                        <input type="text" class="form-control" id="state4" placeholder="Kerala" />
                    </div>
                    <div class="col-md-3">
                        <label for="country4" class="form-label">Country</label>
                        <input type="text" class="form-control" id="country4" placeholder="India" />
                    </div>
                    <div class="col-md-3">
                        <label for="primaryphone4" class="form-label">Primary Phone</label>
                        <input type="number" class="form-control" id="primaryphone4" placeholder="" />
                    </div>
                    <div class="col-md-3">
                        <label for="secondaryphone4" class="form-label">Secondary Phone</label>
                        <input type="number" class="form-control" id="secondaryphone4" placeholder="" />
                    </div>
                    <div class="col-md-3">
                        <label for="secondaryemail4" class="form-label">Secondary Email</label>
                        <input type="email" class="form-control" id="secondaryemail4" placeholder="email@gmail.com" />
                    </div>

                    <p class="fw-bolder mb-0 mt-5 ps-4 ">Other Statutory information</p>
                    <div class="col-md-2">
                        <label for="panno4" class="form-label">PAN No</label>
                        <input type="text" class="form-control" id="panno4" placeholder="" />
                    </div>
                    <div class="col-md-2">
                        <label for="aadharno4" class="form-label">Aadhar No</label>
                        <input type="text" class="form-control" id="aadharno4" placeholder="" />
                    </div>
                    <div class="col-md-2">
                        <label for="pfno4" class="form-label">PF No</label>
                        <input type="text" class="form-control" id="pfno4" placeholder="" />
                    </div>
                    <div class="col-md-2">
                        <label for="bank4" class="form-label">Bank</label>
                        <input type="text" class="form-control" id="bank4" placeholder="" />
                    </div>
                    <div class="col-md-2">
                        <label for="ifsccode4" class="form-label">IFSC Code</label>
                        <input type="text" class="form-control" id="ifsccode4" placeholder="" />
                    </div>
                    <div class="col-md-2">
                        <label for="accountno4" class="form-label">Account No</label>
                        <input type="number" class="form-control" id="accountno4" placeholder="" />
                    </div>

                    <p class="fw-bolder mb-0 mt-5 ps-4 ">Educational Details</p>
                    <p class="ps-4">Higher Education</p>
                    <div class="col-md-4">
                        <label for="course4" class="form-label">Course</label>
                        <input type="text" class="form-control" id="course4" placeholder="" />
                    </div>
                    <div class="col-md-4">
                        <label for="passout4" class="form-label">Passout Year</label>
                        <input type="text" class="form-control" id="passout4" placeholder="" />
                    </div>
                    <div class="col-md-4">
                        <label for="institute4" class="form-label">Institute</label>
                        <input type="text" class="form-control" id="institute4" placeholder="" />
                    </div>

                    <div class="col-md-4">
                        <label for="course5" class="form-label">Course</label>
                        <input type="text" class="form-control" id="course5" placeholder="" />
                    </div>
                    <div class="col-md-4">
                        <label for="passout5" class="form-label">Passout Year</label>
                        <input type="text" class="form-control" id="passout5" placeholder="" />
                    </div>
                    <div class="col-md-4">
                        <label for="institute5" class="form-label">Institute</label>
                        <input type="text" class="form-control" id="institute5" placeholder="" />
                    </div>

                    <div class="col-md-4">
                        <label for="course6" class="form-label">Course</label>
                        <input type="text" class="form-control" id="course6" placeholder="" />
                    </div>
                    <div class="col-md-4">
                        <label for="passout6" class="form-label">Passout Year</label>
                        <input type="text" class="form-control" id="passout6" placeholder="" />
                    </div>
                    <div class="col-md-4">
                        <label for="institute6" class="form-label">Institute</label>
                        <input type="text" class="form-control" id="institute6" placeholder="" />
                    </div>

                    <p class="ps-4">School Education</p>
                    <div class="col-md-3">
                        <label for="course7" class="form-label">Course</label>
                        <input type="text" class="form-control" id="course7" placeholder="SSLC" />
                    </div>
                    <div class="col-md-3">
                        <label for="passout7" class="form-label">Passout Year</label>
                        <input type="text" class="form-control" id="passout7" placeholder="" />
                    </div>
                    <div class="col-md-3">
                        <label for="board7" class="form-label">Board</label>
                        <input type="text" class="form-control" id="board7" placeholder="" />
                    </div>
                    <div class="col-md-3">
                        <label for="institute7" class="form-label">Institute</label>
                        <input type="text" class="form-control" id="institute7" placeholder="" />
                    </div>

                    <div class="col-md-3">
                        <label for="course8" class="form-label">Course</label>
                        <input type="text" class="form-control" id="course8" placeholder="HSS (+2)" />
                    </div>
                    <div class="col-md-3">
                        <label for="passout8" class="form-label">Passout Year</label>
                        <input type="text" class="form-control" id="passout8" placeholder="" />
                    </div>
                    <div class="col-md-3">
                        <label for="board8" class="form-label">Board</label>
                        <input type="text" class="form-control" id="board8" placeholder="" />
                    </div>
                    <div class="col-md-3">
                        <label for="institute8" class="form-label">Institute</label>
                        <input type="text" class="form-control" id="institute8" placeholder="" />
                    </div>






                    <div class="col-4">
                        <button type="submit" class="btn btn-primary bg-success"><i class="bi bi-upload"></i> Update</button>
                    </div>
                    <div class="col-4">
                        <button type="submit" class="btn btn-primary bg-warning"><i class="bi bi-x-lg"></i> Cancel</button>
                    </div>
                    <div class="col-4">
                        <button type="submit" class="btn btn-primary bg-danger"><i class="bi bi-backspace-reverse"></i> Back</button>
                    </div>
                </form>
                {/* Form Body Ends here  */}
            </div>

        </>
    )
}

export default EmployeeForum