import React from 'react';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <div className = 'auth-box'>
            <Button className = 'auth-buttons' variant='primary' onClick={() => navigate('/Dashboard')}>
                Dashboard
            </Button>
            <Button className = 'auth-buttons' variant='primary' onClick={() => logout()}>
                Logout
            </Button>
        </div>
    );
}