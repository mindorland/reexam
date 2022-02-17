import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Shopping from "./pages/Shopping";
import Excursion from "./pages/Excursion";
import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Parse from "parse/dist/parse.min.js";
Parse.initialize(
  "ov1tNGhqHPywaMy5xrh9BcBJaprgHK7pa5NttJbv", //application ID
  "54x16soSKNHvYjpe8320xHwlVz3wtEOU2zoxE0UO" // Javascript key
);

Parse.serverURL = "https://parseapi.back4app.com/";

function App() {
  return (
    <>
      <BrowserRouter>
        <Buttons />
        {/*         <Navbar /> */}
        <Table />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/excursion" element={<Excursion />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
