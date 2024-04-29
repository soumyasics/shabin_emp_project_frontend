import React from 'react'
import { Link } from 'react-router-dom'
import SidebarHr from './SidebarHr'
import NavbarHr from './NavbarHr'

function Paysalary() {
    return (
        <div class="d-flex  bg-secondary-subtle" id="wrapper">
            {/* Sidebar starts */}
            <SidebarHr />
            {/* Sidebar ends */}
            <div id="page-content-wrapper">

                {/* Navbar starts */}
                <NavbarHr />
                {/* Navbar ends */}


                {/* Payment starts here */}
                <form class="row g-3 m-0 bg-secondary-subtle">
                    <h3 class="text-center pt-4">Pay Salary</h3>
                    <hr></hr>
                    <div class="row g-3 justify-content-between">
                        <div class="col-md-3">
                            <label for="fullname4" class="form-label">Fullname</label>
                            <input type="text" class="form-control" id="fullname4" />
                        </div>
                        <div class="col-md-3">
                            <label for="employeeid4" class="form-label">EmployeeID</label>
                            <input type="email" class="form-control" id="employeeid4" />
                        </div>
                        <div class="col-md-3">
                            <label for="projectname4" class="form-label">Notes</label>
                            <input type="email" class="form-control" id="projectname4" />
                        </div>
                    </div>

                    <div class="row g-3 justify-content-between">
                        <div class="col-md-2">
                            <label for="noofdaysworked4" class="form-label">No of days worked</label>
                            <input type="email" class="form-control" id="noofdaysworked4" />
                        </div>
                        <div class="col-md-2">
                            <label for="amount4" class="form-label">Amount</label>
                            <input type="email" class="form-control" id="amount4" />
                        </div>
                        <div class="col-md-2">
                            <label for="deduction4" class="form-label">Deductions</label>
                            <input type="email" class="form-control" id="deduction4" />
                        </div>
                        <div class="col-md-2">
                            <label for="allowence4" class="form-label">Allowance</label>
                            <input type="email" class="form-control" id="allowence4" />
                        </div>
                    </div>

                    <div class="row g-3 justify-content-between">
                        <div class="col-md-2">
                            <label for="pfno4" class="form-label">PF No</label>
                            <input type="email" class="form-control" id="pfno4" />
                        </div>
                        <div class="col-md-2">
                            <label for="accountno4" class="form-label">Account Number</label>
                            <input type="email" class="form-control" id="accountno4" />
                        </div>
                        <div class="col-md-2">
                            <label for="bankname4" class="form-label">Bank Name</label>
                            <input type="email" class="form-control" id="bankname4" />
                        </div>
                        <div class="col-md-2">
                            <label for="ifsccode4" class="form-label">IFSC Code</label>
                            <input type="email" class="form-control" id="ifsccode4" />
                        </div>
                    </div>
                    <Link class="btn btn-primary m-2" href="#">Initiate Payment</Link>
                </form>
                {/* Payment Ends here    */}
            </div>
        </div>

    )
}

export default Paysalary