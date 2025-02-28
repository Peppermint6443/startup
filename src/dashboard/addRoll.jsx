import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

export function AddRoll(props) {
    return (
        <button type = 'button' className = 'btn btn-light' onClick = {() => {props.updateAddRoll(true)}}>+ Add Roll</button>
    );
}