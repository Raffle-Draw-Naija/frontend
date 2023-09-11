import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { UserServices } from "./services/UserService";
import { useDispatch } from "react-redux";
import Login from "noautharea/pages/Login";
import Dashboard from "autharea/pages/Dashboard";
import RaffleStack from "autharea/pages/RaffleStack";
import NavigationContainer from "autharea/components/nagivation/navigationContainer";
import { useMediaQuery } from '@mui/material';

import "./App.css";
// axios.defaults.baseURL = "http://localhost:8000/api/";
function App() {
  const isSmallScreen = useMediaQuery('(max-width: 991px)');
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
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
    {pathname?.slice(1) === "login" ? null : <NavigationContainer />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/raffle-stake" element={<RaffleStack />} />
      </Routes>
    </div>
  );
}

export default App;
