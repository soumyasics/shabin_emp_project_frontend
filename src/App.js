import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter,Route, Routes,Router } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import EmployeeHome from './Component/EmployeeHome';
import HrandAdminLogin from './Component/HrandAdminLogin';
import EmployeeForum from './Component/EmployeeForum';
import Paysalary from './Component/Paysalary';
import AllEmployees from './Component/AllEmployees';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/employeehome' element={<EmployeeHome/>}/>
      <Route path='/hroradminlogin' element={<HrandAdminLogin/>}/>
      <Route path='/employeeform' element={<EmployeeForum/>}/>
      <Route path='/paysalary' element={<Paysalary/>}/>
      <Route path='/allemployees' element={<AllEmployees/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
