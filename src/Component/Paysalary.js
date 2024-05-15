// To make payment by either HR or Admin
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import SidebarAdmin from './SidebarAdmin'
import NavbarAdmin from './NavbarAdmin'

const Paysalary = () => {
    const [employee_name, setEmployee_Name] = useState();
    const [employee_id, setEmployee_Id] = useState();
    const [notes, setNotes] = useState();
    const [date_of_payment, setDate_Of_Payment] = useState();
    const [no_of_days_worked, setNo_Of_Days_Worked] = useState();
    const [amount, setAmount] = useState();
    const [deduction, setDeduction] = useState();
    const [allowance, setAllowance] = useState();
    const [pf_no, setPf_No] = useState();
    const [account_no, setAccount_No] = useState();
    const [bank, setBank] = useState();
    const [ifsc_code, setIfsc_Code] = useState();

    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3001/admin/getEmployeeById/${id}`)
            .then((res) => {
                setEmployee_Name(res.data.data.employee_name);
                setEmployee_Id(res.data.data.employee_id);
                setNotes(res.data.data.notes);
                setDate_Of_Payment(res.data.data.date_of_payment);
                setNo_Of_Days_Worked(res.data.data.no_of_days_worked);
                setAmount(res.data.data.amount);
                setDeduction(res.data.data.deduction);
                setAllowance(res.data.data.allowance);
                setPf_No(res.data.data.pf_no);
                setAccount_No(res.data.data.account_no);
                setBank(res.data.data.bank);
                setIfsc_Code(res.data.data.ifsc_code);

            })
            .catch((err) => {
                alert('error in getting Employee details')
                console.log(err);
            })
    }, [])

    const handleIndividualSalary = () => {
        const data = {
            employee_name,
            employee_id,
            notes,
            date_of_payment,
            no_of_days_worked,
            amount,
            deduction,
            allowance,
            pf_no,
            account_no,
            bank,
            ifsc_code
        }
        axios
            .post(`http://localhost:3001/admin/indiviualsalarypay/${id}`, data)
            .then((res) => {
                console.log(res);
                alert('Employee salary paid')
                navigate('/allsalary')
            })
            .catch((err) => {
                console.log(err);
                alert('error in paying salary')
            })
    }

    return (
        <div class="d-flex  bg-secondary-subtle" id="wrapper">
            {/* Sidebar starts */}
            <SidebarAdmin />
            {/* Sidebar ends */}
            <div id="page-content-wrapper">

                {/* Navbar starts */}
                <NavbarAdmin />
                {/* Navbar ends */}


                {/* Payment starts here */}
                <form class="row g-3 m-0 bg-secondary-subtle ">
                    <h3 class="text-center pt-4">Pay Salary</h3>
                    <hr></hr>
                    <div class="row g-3 justify-content-between">
                        <div class="col-md-3">
                            <label for="employee_name4" class="form-label">Employee Name</label>
                            <input type="text" class="form-control" id="employee_name4" 
                                value={employee_name}
                                onChange={(e => setEmployee_Name(e.target.value))} />
                        </div>
                        <div class="col-md-3">
                            <label for="employeeid4" class="form-label">EmployeeID</label>
                            <input type="text" class="form-control" id="employeeid4"
                                value={employee_id}
                                onChange={(e => setEmployee_Id(e.target.value))} />
                        </div>
                        <div class="col-md-3">
                            <label for="projectname4" class="form-label">Notes</label>
                            <input type="text" class="form-control" id="projectname4" 
                                value={notes}
                                onChange={(e => setNotes(e.target.value))} />
                        </div>
                        <div class="col-md-3">
                            <label for="projectname4" class="form-label">Date of payment</label>
                            <input type="date" class="form-control" id="projectname4"
                                value={date_of_payment}
                                onChange={(e => setDate_Of_Payment(e.target.value))} />
                        </div>
                    </div>

                    <div class="row g-3 justify-content-between">
                        <div class="col-md-2">
                            <label for="noofdaysworked4" class="form-label">No of days worked</label>
                            <input type="number" class="form-control" id="noofdaysworked4" 
                                value={no_of_days_worked}
                                onChange={(e => setNo_Of_Days_Worked(e.target.value))} />
                        </div>
                        <div class="col-md-2">
                            <label for="amount4" class="form-label">Amount</label>
                            <input type="number" class="form-control" id="amount4"
                                value={amount}
                                onChange={(e => setAmount(e.target.value))} />
                        </div>
                        <div class="col-md-2">
                            <label for="deduction4" class="form-label">Deductions</label>
                            <input type="number" class="form-control" id="deduction4" 
                                value={deduction}
                                onChange={(e => (e.target.value))} />
                        </div>
                        <div class="col-md-2">
                            <label for="allowence4" class="form-label">Allowance</label>
                            <input type="number" class="form-control" id="allowence4" 
                                value={allowance}
                                onChange={(e => (e.target.value))} />
                        </div>
                    </div>

                    <div class="row g-3 justify-content-between">
                        <div class="col-md-2">
                            <label for="pfno4" class="form-label">PF No</label>
                            <input type="text" class="form-control" id="pfno4" 
                                value={pf_no}
                                onChange={(e => setPf_No(e.target.value))} />
                        </div>
                        <div class="col-md-2">
                            <label for="accountno4" class="form-label">Account Number</label>
                            <input type="number" class="form-control" id="accountno4" 
                                value={account_no}
                                onChange={(e => setAccount_No(e.target.value))} />
                        </div>
                        <div class="col-md-2">
                            <label for="bankname4" class="form-label">Bank Name</label>
                            <input type='text' class="form-control" id="bankname4" 
                                value={bank}
                                onChange={(e => (e.target.value))} />
                        </div>
                        <div class="col-md-2">
                            <label for="ifsccode4" class="form-label">IFSC Code</label>
                            <input type="text" class="form-control" id="ifsccode4" 
                                value={ifsc_code}
                                onChange={(e => setIfsc_Code(e.target.value))} />
                        </div>
                    </div>
                    <button class="btn btn-primary m-2" type="button" onClick={handleIndividualSalary}>Initiate Payment</button>
                </form>
                {/* Payment Ends here    */}
            </div>
        </div>

    )
}

export default Paysalary