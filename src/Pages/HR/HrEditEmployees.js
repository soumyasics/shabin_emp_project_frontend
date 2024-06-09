import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const HrEditEmployees = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        axios
            .get(`http://localhost:3001/admin/getEmployeeById/${id}`)
            .then((res) => {
                setDetail(res.data.data)
                console.log("hai");
            })
            .catch((err) => {
                console.log(err);
                alert('Error in loading data');
            })
    }, [])
    return (
        <div>
            <p>hai {detail.employee_name}</p>
            <input value={detail.employee_name} />
            <input value={detail.employee_name} />
        </div>
    )
}

export default HrEditEmployees