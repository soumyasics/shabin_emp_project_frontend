import React, { useEffect, useState } from 'react';
import './EditEmployees.css';
import axios from 'axios';
import SidebarAdmin from './SidebarAdmin';
import NavbarAdmin from './NavbarAdmin';
import { useParams } from 'react-router-dom';



const EditEmployees = () => {
    const [employee_name, setEmployee_Name] = useState();
    const [employee_id, setEmployee_Id] = useState();
    const [date_of_birth, setDate_Of_Birth] = useState();
    const [designation, setDesignation] = useState();
    const [profile_picture, setProfile_Picture] = useState();
    const [date_of_joining, setDate_Of_joining] = useState();
    const [house_number, setHouse_Number] = useState();
    const [street_name, setStreet_Name] = useState();
    const [city, setCity] = useState();
    const [landmark, setLandmark] = useState();
    const [zip, setZip] = useState();
    const [district, setDistrict] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [primary_phone, setPrimary_Phone] = useState();
    const [secondary_phone, setSecondary_Phone] = useState();
    const [email, setEmail] = useState();
    const [pan_no, setPan_No] = useState();
    const [aadhar_no, setAadhar_No] = useState();
    const [pf_no, setPf_No] = useState();
    const [bank, setBank] = useState();
    const [ifsc_code, setIfsc_Code] = useState();
    const [account_no, setAccount_No] = useState();
    const [course, setCourse] = useState();
    const [passout_year, setPassout_Year] = useState();
    const [institute, setInstitute] = useState();
    const [course_1, setCourse_1] = useState();
    const [passout_year_1, setPassout_Year_1] = useState();
    const [institute_1, setInstitute_1] = useState();
    const [course_2, setCourse_2] = useState();
    const [passout_year_2, setPassout_Year_2] = useState();
    const [institute_2, setInstitute_2] = useState();
    const { id } = useParams()
    
    useEffect(()=>{
        axios
        .get(`http://localhost:3001/admin/getEmployeeById/${id}`)
        .then((res)=>{
            console.log(res);
            setEmployee_Name(res.data.data.employee_name);
            setEmployee_Id(res.data.data.employee_id);
            setDate_Of_Birth(res.data.data.date_of_birth);
            setDesignation(res.data.data.designation);
            // setProfile_Picture(res.data.data.profile_picture);
            setDate_Of_joining(res.data.data.date_of_joining);
            setHouse_Number(res.data.data.house_number);
            setStreet_Name(res.data.data.street_name);
            setCity(res.data.data.city);
            setLandmark(res.data.data.landmark);
            setZip(res.data.data.zip);
            setDistrict(res.data.data.district);
            setState(res.data.data.state);
            setCountry(res.data.data.country);
            setPrimary_Phone(res.data.data.primary_phone);
            setSecondary_Phone(res.data.data.secondary_phone);
            setEmail(res.data.data.email);
            setPan_No(res.data.data.pan_no);
            setAadhar_No(res.data.data.aadhar_no);
            setPf_No(res.data.data.pf_no);
            setBank(res.data.data.bank);
            setIfsc_Code(res.data.data.ifsc_code);
            setAccount_No(res.data.data.account_no);
            setCourse(res.data.data.course);
            setPassout_Year(res.data.data.passout_year);
            setInstitute(res.data.data.institute);
            setCourse_1(res.data.data.course_1);
            setPassout_Year_1(res.data.data.passout_year_1);
            setInstitute_1(res.data.data.institute_1);
            setCourse_2(res.data.data.course_2);
            setPassout_Year_2(res.data.data.passout_year_2);
            setInstitute_2(res.data.data.institute_2)
        })
        .catch((error)=>{
            alert("error in loading employee");
            console.log(error);
        })
        console.log(id);
    },[])

    const handleEditEmployee = () => {
        const data = {
            employee_name,
            employee_id,
            date_of_birth,
            designation,
            profile_picture,
            date_of_joining,
            house_number,
            street_name,
            city,
            landmark,
            zip,
            district,
            state,
            country,
            primary_phone,
            secondary_phone,
            email,
            pan_no,
            aadhar_no,
            pf_no,
            bank,
            ifsc_code,
            account_no,
            course,
            passout_year,
            institute,
            course_1,
            passout_year_1,
            institute_1,
            course_2,
            passout_year_2,
            institute_2,

        }
        axios
            .put(`http://localhost:3001/admin/editemployees/${id}`, data)
            .then((res) => {
                console.log(res);
                alert("Employee added")
            })
            .catch((error) => {
                console.log(error);
                alert("Error in editing employee")
            })
    }

    return (
        <div class="d-flex  bg-secondary-subtle" id="wrapper">

            {/* Sidebar starts here */}
            <SidebarAdmin />
            {/* Sidebar ends here */}
            <div id="page-content-wrapper">

                {/* Navbar starts */}
                <NavbarAdmin />
                {/* Navbar ends */}

                {/* Form Body starts here  */}
                <form class="row g-3" >
                    <div>
                        <h4 class="text-center p-4">Edit Employee Profile</h4>
                        <hr></hr>
                    </div>
                    <div class="col-md-4">
                        <label for="emploueename4" class="form-label">Employee Name:</label>
                        <input type="text" class="form-control" id="emploueename4"
                            value={employee_name}
                            onChange={(e) => setEmployee_Name(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="employeeid4" class="form-label">Employee ID</label>
                        <input type="number" class="form-control" id="employeeid4"
                            value={employee_id}
                            onChange={(e) => setEmployee_Id(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="dateofbirth4" class="form-label">Date of birth</label>
                        <input type="date" class="form-control" id="dateofbirth4"
                            value={date_of_birth}
                            onChange={(e) => setDate_Of_Birth(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="designation4" class="form-label">Designation</label>
                        <select class="form-select" aria-label="Default select example" id='designation4'
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}>
                            <option selected>Choose</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                            <option>Fullstack Developer</option>
                            <option>Tester</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="formFile" class="form-label">Upload Profile Picture</label>
                        <input class="form-control" type="file" id="formFile"
                            value={profile_picture}
                            onChange={(e) => setProfile_Picture(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="unknown4" class="form-label">Date of Joining</label>
                        <input type="date" class="form-control" id="unknown4"
                            value={date_of_joining}
                            onChange={(e) => setDate_Of_joining(e.target.value)} />
                    </div>

                    <p class="fw-bolder mb-0 mt-5 ps-4">Permanent Adress</p>
                    <div class="col-md-3">
                        <label for="housenumber4" class="form-label">House Number</label>
                        <input type="text" class="form-control" id="housenumber4"
                            value={house_number}
                            onChange={(e) => setHouse_Number(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="streetname4" class="form-label">Street Name</label>
                        <input type="text" class="form-control" id="streetname4"
                            value={street_name}
                            onChange={(e) => setStreet_Name(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="city4" class="form-label">City</label>
                        <input type="text" class="form-control" id="city4"
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="landmark4" class="form-label">Land Mark</label>
                        <input type="text" class="form-control" id="landmark4"
                            value={landmark}
                            onChange={(e) => setLandmark(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="zip4" class="form-label">ZIP</label>
                        <input type="text" class="form-control" id="zip4"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="district4" class="form-label">District</label>
                        <input type="text" class="form-control" id="district4"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="state4" class="form-label">State</label>
                        <input type="text" class="form-control" id="state4"
                            value={state}
                            onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="country4" class="form-label">Country</label>
                        <input type="text" class="form-control" id="country4"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="primaryphone4" class="form-label">Primary Phone</label>
                        <input type="number" class="form-control" id="primaryphone4"
                            value={primary_phone}
                            onChange={(e) => setPrimary_Phone(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="secondaryphone4" class="form-label">Secondary Phone</label>
                        <input type="number" class="form-control" id="secondaryphone4"
                            value={secondary_phone}
                            onChange={(e) => setSecondary_Phone(e.target.value)} />
                    </div>
                    <div class="col-md-3">
                        <label for="secondaryemail4" class="form-label">Email ID</label>
                        <input type="email" class="form-control" id="secondaryemail4"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <p class="fw-bolder mb-0 mt-5 ps-4 ">Other Statutory information</p>
                    <div class="col-md-2">
                        <label for="panno4" class="form-label">PAN No</label>
                        <input type="text" class="form-control" id="panno4"
                            value={pan_no}
                            onChange={(e) => setPan_No(e.target.value)} />
                    </div>
                    <div class="col-md-2">
                        <label for="aadharno4" class="form-label">Aadhar No</label>
                        <input type="text" class="form-control" id="aadharno4"
                            value={aadhar_no}
                            onChange={(e) => setAadhar_No(e.target.value)} />
                    </div>
                    <div class="col-md-2">
                        <label for="pfno4" class="form-label">PF No</label>
                        <input type="text" class="form-control" id="pfno4"
                            value={pf_no}
                            onChange={(e) => setPf_No(e.target.value)} />
                    </div>
                    <div class="col-md-2">
                        <label for="bank4" class="form-label">Bank</label>
                        <input type="text" class="form-control" id="bank4"
                            value={bank}
                            onChange={(e) => setBank(e.target.value)} />
                    </div>
                    <div class="col-md-2">
                        <label for="ifsccode4" class="form-label">IFSC Code</label>
                        <input type="text" class="form-control" id="ifsccode4"
                            value={ifsc_code}
                            onChange={(e) => setIfsc_Code(e.target.value)} />
                    </div>
                    <div class="col-md-2">
                        <label for="accountno4" class="form-label">Account No</label>
                        <input type="number" class="form-control" id="accountno4"
                            value={account_no}
                            onChange={(e) => setAccount_No(e.target.value)} />
                    </div>

                    <p class="fw-bolder mb-0 mt-5 ps-4 ">Educational Details</p>
                    <p class="ps-4">Higher Education</p>
                    <div class="col-md-4">
                        <label for="course4" class="form-label">Course</label>
                        <input type="text" class="form-control" id="course4"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="passout4" class="form-label">Passout Year</label>
                        <input type="text" class="form-control" id="passout4"
                            value={passout_year}
                            onChange={(e) => setPassout_Year(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="institute4" class="form-label">Institute</label>
                        <input type="text" class="form-control" id="institute4"
                            value={institute}
                            onChange={(e) => setInstitute(e.target.value)} />
                    </div>

                    <div class="col-md-4">
                        <label for="course5" class="form-label">Course</label>
                        <input type="text" class="form-control" id="course5"
                            value={course_1}
                            onChange={(e) => setCourse_1(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="passout5" class="form-label">Passout Year</label>
                        <input type="text" class="form-control" id="passout5"
                            value={passout_year_1}
                            onChange={(e) => setPassout_Year_1(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="institute5" class="form-label">Institute</label>
                        <input type="text" class="form-control" id="institute5"
                            value={institute_1}
                            onChange={(e) => setInstitute_1(e.target.value)} />
                    </div>

                    <div class="col-md-4">
                        <label for="course6" class="form-label">Course</label>
                        <input type="text" class="form-control" id="course6"
                            value={course_2}
                            onChange={(e) => setCourse_2(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="passout6" class="form-label">Passout Year</label>
                        <input type="text" class="form-control" id="passout6"
                            value={passout_year_2}
                            onChange={(e) => setPassout_Year_2(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="institute6" class="form-label">Institute</label>
                        <input type="text" class="form-control" id="institute6"
                            value={institute_2}
                            onChange={(e) => setInstitute_2(e.target.value)} />
                    </div>

                    <div class="col-4">
                        <button class="btn btn-primary bg-success" onClick={handleEditEmployee}><i class="bi bi-upload"></i> Update</button>
                    </div>
                    <div class="col-4">
                        <button type="reset" class="btn btn-primary bg-warning"><i class="bi bi-arrow-clockwise"></i> Reset</button>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-primary bg-danger"><i class="bi bi-backspace-reverse"></i> Back</button>
                    </div>
                </form>
                {/* Form Body Ends here  */}

            </div>
        </div>
    )
}

export default EditEmployees