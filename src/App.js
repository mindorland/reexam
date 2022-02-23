import React from "react";
import "./OurStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cars from "./pages/Cars/Cars";
import Driver from "./pages/Cars/Driver";
import Rider from "./pages/Cars/Rider";
import DriverStatus from "./pages/Cars/DriverStatus";
import DriverCompleteStatus from "./pages/Cars/DriverCompleteStatus";
import RiderStatus from "./pages/Cars/RiderStatus";
import Shopping from "./pages/Shopping";
import Excursion from "./pages/Excursion";
import Parse from "parse/dist/parse.min.js";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        /* <Navbar /> */
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/excursion" element={<Excursion />} />
          <Route path="/cars/driver" element={<Driver />} />
          <Route path="/cars/rider" element={<Rider />} />
          <Route path="/cars/driverstatus" element={<DriverStatus />} />
          <Route
            path="/cars/driverscomplete"
            element={<DriverCompleteStatus />}
          />
          <Route path="/cars/riderstatus" element={<RiderStatus />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
