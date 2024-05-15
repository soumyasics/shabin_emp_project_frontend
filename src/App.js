import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import EmployeeHome from './Component/EmployeeHome';
import Paysalary from './Component/Paysalary';
import AllEmployees from './Component/AllEmployees';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import NavbarHr from './Component/NavbarHr';
import SidebarHr from './Component/SidebarHr';
import NavbarAdmin from './Component/NavbarAdmin';
import SidebarAdmin from './Component/SidebarAdmin';
import HrHome from './Component/HrHome';
import AdminHome from './Component/AdminHome';
import EmployeeProfile from './Component/EmployeeProfile';
import HrandAdminSignup from './Component/HRsignup';
import HRLogin from './Component/HRLogin';
import AdminSignup from './Component/AdminSignup';
import AdminLogin from './Component/AdminLogin';
import CalenderEmployee from './Component/CalenderEmployee';
import AllPaySalary from './Component/AllPaySalary';
import AddEmployees from './Component/Addemployees';
import EditEmployees from './Component/EditEmployees';
import DeleteEmployee from './Component/DeleteEmployee';
import AllTransactionHistory from './Component/AllTransactionHistory';




function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Component starts */}

        {/* Employee starts */}

        <Route path='/navbar' element={<Navbar />} />
        <Route path='/sidebar' element={<Sidebar />} />

        {/* Employee ends */}

        {/* HR Starts */}

        <Route path='/navbarhr' element={<NavbarHr />} />
        <Route path='/sidebarhr' element={<SidebarHr />} />

        {/* HR Ends */}

        {/* Admin starts */}

        <Route path='/navbaradmin' element={<NavbarAdmin />} />
        <Route path='/sidebaradmin' element={<SidebarAdmin />} />

        {/* Admin Ends */}

        {/* Component ends */}


        {/* Complete Component Start */}

        <Route path='/' element={<Home />} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/employeehome' element={<EmployeeHome />} />
        <Route path='/employeeprofile' element={<EmployeeProfile />} />
        {/* no api */}
        <Route path='/calenderemployee' element={<CalenderEmployee />} />


        <Route path='/hrsignup' element={<HrandAdminSignup />} />
        <Route path='/hrlogin' element={<HRLogin />} />
        <Route path='/hrhome' element={<HrHome />} />
        <Route path='/allemployees' element={<AllEmployees />} />


        <Route path='/adminsignup' element={<AdminSignup />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/allemployees' element={<AllEmployees />} />

        <Route path='/admin/addemployees' element={<AddEmployees />} />
        <Route path='/paysalary/:id' element={<Paysalary />} />
        <Route path='/allsalary' element={<AllPaySalary />} />

        <Route path='/admin/editemployees/:id' element={<EditEmployees />} />
        <Route path='/admin/delete/:id' element={<DeleteEmployee/>}/>
        <Route path='/admin/transactionhistoty' element={<AllTransactionHistory/>}/>


        {/* Complete Component Ends */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
