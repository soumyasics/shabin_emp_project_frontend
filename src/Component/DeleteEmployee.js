import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function DeleteEmployee() {
    const navigate = useNavigate()
        const { id } = useParams()
    const handleDeleteEmployee = () => {
        
        axios
            .delete(`http://localhost:3001/admin/delete/${id}`)
            .then(() => {
                navigate('/allemployees')
            })
            .catch((err) => {
                alert('error in deleting employee')
                console.log(err);
            })
    }
    return (
        <div>
            <h1>DeleteEmployee</h1>
            <p>Do you really want to delete</p>
            <button onClick={handleDeleteEmployee}>delete</button>
        </div>
    )
}

export default DeleteEmployee