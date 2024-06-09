import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Component/Home";
import Login from "./Pages/Employee/Login";
import Signup from "./Pages/Employee/Signup";
import EmployeeHome from "./Pages/Employee/EmployeeHome";
import Paysalary from "./Pages/Admin/Paysalary";
import AllEmployees from "./Pages/Admin/AllEmployees";
import Sidebar from "./Component/Employee/Sidebar";
import Navbar from "./Component/Employee/Navbar";
import NavbarHr from "./Component/HR/NavbarHr";
import SidebarHr from "./Component/HR/SidebarHr";
import NavbarAdmin from "./Component/Admin/NavbarAdmin";
import SidebarAdmin from "./Component/Admin/SidebarAdmin";
import HrHome from "./Pages/HR/HrHome";
import AdminHome from "./Pages/Admin/AdminHome";
import EmployeeProfile from "./Pages/Employee/EmployeeProfile";
import HrandAdminSignup from "./Pages/HR/HRsignup";
import HRLogin from "./Pages/HR/HRLogin";
import AdminSignup from "./Pages/Admin/AdminSignup";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AllPaySalary from "./Pages/Admin/AllPaySalary";
import AddEmployees from "./Pages/Admin/Addemployees";
import EditEmployees from "./Pages/Admin/EditEmployees";
import AllTransactionHistory from "./Pages/Admin/AllTransactionHistory";
import AdminTimeSheet from "./Pages/Admin/AdminTimeSheet";
import EmployeeSalary from "./Pages/Employee/EmployeeSalary";
import CalenderEmployee from "./Pages/Employee/CalenderEmployee";
import ApplyLeaveEmp from "./Pages/Employee/ApplyLeaveEmp";
import Management from "./Pages/Admin/Management";
import EmployeeTickets from "./Pages/Employee/EmployeeTickets";
import EmployeeTasks from "./Pages/Employee/EmployeeTasks";
import LeaveRequest from "./Pages/Admin/LeaveRequest";
import RejectedLeaveRequest from "./Pages/Admin/RejectedLeaveRequest";
import ApprovedLeaveRequest from "./Pages/Admin/ApprovedLeaveRequest";
import AdminHighPriorityTickets from "./Pages/Admin/AdminHighPriorityTickets";
import AdminMediumPriorityTickets from "./Pages/Admin/AdminMediumPriorityTickets";
import AdminLowPriorityTickets from "./Pages/Admin/AdminLowPriorityTickets";
import HrAllEmployees from "./Pages/HR/HrAllEmployees";
import HrEditEmployees from "./Pages/HR/HrEditEmployees";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Component starts */}

        {/* Employee starts */}

        <Route path="/navbar" element={<Navbar />} />
        <Route path="/sidebar" element={<Sidebar />} />

        {/* Employee ends */}

        {/* HR Starts */}

        <Route path="/navbarhr" element={<NavbarHr />} />
        <Route path="/sidebarhr" element={<SidebarHr />} />

        {/* HR Ends */}

        {/* Admin starts */}

        <Route path="/navbaradmin" element={<NavbarAdmin />} />
        <Route path="/sidebaradmin" element={<SidebarAdmin />} />

        {/* Admin Ends */}

        {/* Component ends */}

        {/* Complete Component Start */}

        <Route path="/" element={<Home />} />

        {/* Employee */}
        {/* Employee Signup */}
        <Route path="/signup" element={<Signup />} />
        {/* Employee Login */}
        <Route path="/login" element={<Login />} />
        {/* Employee Home */}
        <Route path="/employeehome" element={<EmployeeHome />} />
        {/* Employee profile */}
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/employee/employeetasks" element={<EmployeeTasks />} />
        {/* Employee salary details */}
        <Route path="/employee/salary" element={<EmployeeSalary />} />
        {/* Employee Leave request */}
        <Route path="/employee/leaverequest" element={<LeaveRequest />} />
        {/* Related to leave and attendance */}
        <Route path="/employee/calenderemployee" element={<CalenderEmployee />} />
        {/* Applay leave */}
        <Route path="/employee/applyleaveemp" element={<ApplyLeaveEmp />} />
        {/* Create tickets */}
        <Route path="/employee/tickets" element={<EmployeeTickets />} />
        {/*  */}
        <Route path="/hrsignup" element={<HrandAdminSignup />} />
        <Route path="/hrlogin" element={<HRLogin />} />
        <Route path="/hrhome" element={<HrHome />} />

        {/* Admin starts */}

        {/* Signup for admin */}
        <Route path="/adminsignup" element={<AdminSignup />} />
        {/* Login for admin */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        {/* Admin Home page */}
        <Route path="/adminhome" element={<AdminHome />} />
        {/* Add an employee */}
        <Route path="/admin/addemployees" element={<AddEmployees />} />
        {/* Update an employee */}
        <Route path="/admin/editemployees/:id" element={<EditEmployees />} />
        {/* List of all employees */}
        <Route path="/allemployees" element={<AllEmployees />} />
        {/* Pay employee salary */}
        <Route path="/paysalary/:id" element={<Paysalary />} />
        {/* Payment page of all employee to select one */}
        <Route path="/allsalary" element={<AllPaySalary />} />
        {/* Delete an employee */}
        {/* <Route path="/admin/delete/:id" element={<DeleteEmployee />} /> */}
        {/* Transaction history of all employee */}
        <Route path="/admin/transactionhistoty" element={<AllTransactionHistory />} />
        {/* Manage  All activites */}
        <Route path="/admin/management" element={<Management />} />
        {/* View High priority Tickets */}
        <Route path="/admin/highprioritytickets" element={<AdminHighPriorityTickets />} />
        {/* View Medium priority Tickets */}
        <Route path="/admin/mediumprioritytickets" element={<AdminMediumPriorityTickets />} />
        {/* View Low priority Tickets */}
        <Route path="/admin/lowprioritytickets" element={<AdminLowPriorityTickets />} />
        {/* View Leave Request */}
        <Route path="/admin/leaverequest" element={<LeaveRequest />} />
        {/* Acces leave request, approved request and rejected */}
        <Route path="/admin/timesheet" element={<AdminTimeSheet />} />
        {/* Detail of Rejected leave request */}
        <Route path='/admin/rejectedleaverequest' element={<RejectedLeaveRequest />} />
        {/* Detail of Approved leave request */}
        <Route path="/admin/approvedleaverequest" element={<ApprovedLeaveRequest />} />


        {/* Admin Ends */}

        {/* HR starts */}
        {/* View all employees */}
        <Route path="/hr/allemployees" element={<HrAllEmployees />} />
        {/* Edit Employees */}
        <Route path="/hr/editemployees/:id" element={<HrEditEmployees />} />
        {/* HR ends */}

        {/* Complete Component Ends */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
