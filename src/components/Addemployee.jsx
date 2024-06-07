import React, { useEffect, useState } from 'react';
import Employeeservice from '../services/Employeeservice';
import { Link, useParams } from "react-router-dom";


const Addemployee = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    let { id } = useParams();

    function saveorUpdateEmployee(e) {
        console.log(id);
        e.preventDefault();
        const employees = { firstname, lastname, email };


        if (id) {
            console.log(id);
            Employeeservice.updateEmployee(id, employees).then((res) => { }).catch((err) => console.log(err));
        }
        else {
            Employeeservice.createEmployees(employees)
                .then((res) => {
                    console.log(res.data);

                })
                .catch(err => console.log(err));
        }

    }
    useEffect(() => {
        Employeeservice.getEmployeebyId(id).then((res) => {
            setFirstname(res.data.firstname);
            setLastname(res.data.lastname);
            setEmail(res.data.email);
        }).catch((err) => { console.log(err) });
    }, [])

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        }
        else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div> <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>Add Employee</h2>
                        {title()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name :</label>
                                    <input type='text' placeholder='Enter the FirstName' name="firstname" value={firstname} className='form-control' onChange={(e) => setFirstname(e.target.value)} />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Lasst Name :</label>
                                    <input type='text' placeholder='Enter the LastName' name="lasstname" value={lastname} className='form-control' onChange={(e) => setLastname(e.target.value)} />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>E-mail:</label>
                                    <input type='text' placeholder='Enter the Email' name="email" value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <button className='btn btn-success' onClick={(e) => saveorUpdateEmployee(e)}>Save</button>
                                <Link to="/employees" className='btn btn-danger'> Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
                <br /><br />
                <Link to="/employees" className='btn btn-primary mb-2'> Back To List Page</Link>
            </div>
        </div>
    )
}

export default Addemployee;
