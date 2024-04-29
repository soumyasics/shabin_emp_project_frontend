import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import EmployeeHome from './Component/EmployeeHome';
import HrandAdminLogin from './Component/HrandAdminLogin';
import Paysalary from './Component/Paysalary';
import AllEmployees from './Component/AllEmployees';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import NavbarHr from './Component/NavbarHr';
import SidebarHr from './Component/SidebarHr';
import NavbarAdmin from './Component/NavbarAdmin';
import SidebarAdmin from './Component/SidebarAdmin';
import EditEmployee from './Component/EditEmployee';
import HrHome from './Component/HrHome';
import AdminHome from './Component/AdminHome';
import EmployeeProfile from './Component/EmployeeProfile';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Component starts */}




        {/* Employee starts */}

        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/navbar' element={<Navbar />} />

        {/* Employee ends */}

        {/* HR Starts */}

        <Route path='/navbarhr' element={<NavbarHr />} />
        <Route path='/sidebarhr' element={<SidebarHr />} />

        {/* HR Ends */}

        {/* Admin starts */}

        <Route path='/navbaradmin' element={<NavbarAdmin />} />
        <Route path='/sidebaradmin' element={<SidebarAdmin />} />

        {/* Admin starts */}
        {/* Component ends */}


        {/* Complete Component Start */}

        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hroradminlogin' element={<HrandAdminLogin />} />


        <Route path='/employeehome' element={<EmployeeHome />} />
        <Route path='/employeeprofile' element={<EmployeeProfile />} />

        <Route path='/hrhome' element={<HrHome />} />
        <Route path='/allemployees' element={<AllEmployees />} />


        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/allemployees' element={<AllEmployees />} />



        <Route path='/editemployee' element={<EditEmployee />} />
        <Route path='/paysalary' element={<Paysalary />} />

        {/* Complete Component Start */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
