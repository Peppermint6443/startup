import React from 'react';
import { NavLink } from 'react-router-dom';

export function AddPrint(props) {
    return (
        <div className="roll-header">
            <button type="button" className="btn btn-light" onClick = {() => {props.updateAddPrint(true)}}>Add print</button>
        </div>
    );
}