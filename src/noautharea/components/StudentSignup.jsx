import React, { useState } from 'react'
import axios from 'axios'
const StudentSignup = () => {
    const initialValues = {
        user_type: "student",
        full_name: "",
        email: "",
        phone: "",
        course: ""
    };

    const [values, setValues] = useState(initialValues);
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });

        console.log("value is ", value)
    };

    const submitStudentDetails = async () => {
        const result = await axios.post('http://api.skillioedu.com/api/v1/student/signup', values)
        console.log("result", result)
        setValues(initialValues)
        setMessage(result.data.msg)
    }
    return (
        <div className="col-md-12">
            <div className="student">
                <div className="instructor-form">
                    <div className="card">
                        <div className="card-body">
                            {message && <div className="alert alert-success"> {message} </div>}
                            <h3>Student</h3>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="text" value={values.full_name} name='full_name' onChange={handleInputChange} className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" value={values.email} name='email' onChange={handleInputChange} className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Phone</label>
                                    <input type="text" value={values.phone} name='phone' onChange={handleInputChange} className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">What Course do you Intend to learn</label>
                                    <input type="text" value={values.course} name='course' onChange={handleInputChange} className="form-control" id="name" />
                                </div>
                                <button className="btn btn-primary" onClick={submitStudentDetails}>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSignup