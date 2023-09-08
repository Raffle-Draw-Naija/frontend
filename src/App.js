import React, { useEffect } from "react";
import Home from "./noautharea/pages/Home";
import { Routes, Route } from "react-router-dom";
import { UserServices } from "./services/UserService";
import { useDispatch } from "react-redux";
import Signup from "noautharea/pages/Signup";
import Student from "noautharea/pages/Student";
import Login from "noautharea/pages/Login";
import "./App.css";
// axios.defaults.baseURL = "http://localhost:8000/api/";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    UserServices.getUser({ token: localStorage.getItem("token") })
      .then(response => {
        console.log("user information is", response.data.data);
        dispatch({
          type: "LOGIN",
          payload: {
            user: response.data.data[0],
          },
        });
      })
      .catch(error => {})
      .finally(() => {});
  }, []);
  return (
    <div className="App">
      {/* <UserInformation /> */}
      <Routes>
       {/* <Route path="/" element={<Home />} />
        <Route path="/instructor/signup" element={<Signup />} />
        <Route path="/student/signup" element={<Student />} /> 
      */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
