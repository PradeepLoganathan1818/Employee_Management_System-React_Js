import React, { useEffect, useState } from 'react'
import Employeeservice from '../services/Employeeservice';
import { Link } from "react-router-dom";

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const getEmployees = () => {
        Employeeservice.getEmployees()
            .then((res) => {
                setEmployees(res.data);
                console.log(employees);
            })
            .catch((err) => console.log(err));

    };

    useEffect(() => {
        getEmployees();
    }, [])


    function deleteEmployee(employeeId) {
        Employeeservice.deleteEmployee(employeeId).then((res) => { getEmployees(); }).catch((err) => console.log(err));
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <Link to="/addemployees" className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Employee Id</th>
                    <th> First Name</th>
                    <th> Last Name</th>
                    <th> E-Mail</th>
                    <th> Actions</th>
                </thead>
                <tbody>
                    {
                        employees.map(employees =>
                            <tr key={employees.id}>
                                <td>{employees.id}</td>
                                <td>{employees.firstname}</td>
                                <td>{employees.lastname}</td>
                                <td>{employees.email}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-employee/${employees.id}`}>Update</Link>
                                    <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleteEmployee(employees.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee
