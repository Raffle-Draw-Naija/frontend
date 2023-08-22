import React, { useState } from 'react'
import axios from 'axios'

const InstructorSignup = () => {

    const initialValues = {
        user_type: "instructor",
        full_name: "",
        email: "",
        phone: "",
        course: "",
        location: "",
        brand: "",
        live_and_pre_video: "",
        social_media_handle: ""
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
    const handleCheckBox = (e) => {

        setValues({
            ...values,
            "live_and_pre_video": e.target.checked,
        });
    }
    const submitStudentDetails = async () => {
        const result = await axios.post('http://localhost:8002/api/v1/instructor/signup', values)
        console.log("result", result)
        setValues(initialValues)
        setMessage(result.data.msg)
    }
    return (

        <div className="col-md-12">
            <div className="instructor-signup">
                <div className="card">
                    <div className="card-body">
                        {message && <div className="alert alert-success"> {message} </div>}
                        <h3>Instructor</h3>
                        <div>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" value={values.full_name} onChange={handleInputChange} name='full_name' className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Brand Name</label>
                                <input type="text" onChange={handleInputChange} name='brand' value={values.brand} className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" onChange={handleInputChange} name='email' value={values.email} className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone</label>
                                <input type="text" onChange={handleInputChange} name='phone' value={values.phone} className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Social Media Handle</label>
                                <input type="text" onChange={handleInputChange} name='social_media_handle' value={values.social_media_handle} className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Course to Teach</label>
                                <input type="text" onChange={handleInputChange} name='course' value={values.course} className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Years of Experience</label>
                                <input type="text" onChange={handleInputChange} name='years_of_experience' value={values.years_of_experience} className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Location</label>
                                <input type="text" onChange={handleInputChange} name='location' value={values.location} className="form-control" id="name" />
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" onChange={e => handleCheckBox(e)} name='live_and_pre_video' value={values.live_and_pre_video} type="checkbox" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Are you willing to do Live and Pre-recorded Courses? YES/ NO
                                </label>
                            </div>
                            <button onClick={submitStudentDetails} className="btn btn-primary">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorSignup