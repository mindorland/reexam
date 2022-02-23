import React from 'react';
import Parse from 'parse/dist/parse.min.js';
import { useState, useEffect } from "react"
import AcceptBtn from '../../components/Buttons/AcceptBtn'
import { useNavigate, Link } from "react-router-dom";

function DriverCompleteStatus() {
    return (
        <div className='home'>
            <h1>Your car is full</h1>
        </div>
    );
}

export default DriverCompleteStatus;