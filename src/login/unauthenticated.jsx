import React from 'react';

import Button from 'react-bootstrap/Button';

import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) { 
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState();
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    return (
        <>
            <form className = 'login-form'>
              <div className = 'form-items'>
                  <input type = 'text' className = 'form-input' placeholder = 'Email Address' value = {userName} onChange = {(e) => setUserName(e.target.value)}></input>
              </div>
              <div className = 'form-items'>
                  <input type = 'password' className = 'form-input' placeholder = 'Password' onChange = {(e) => setPassword(e.target.value)}></input>
              </div>
              <div className = 'form-buttons '>
                  <button type = 'button' className = 'btn btn-primary' onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
                  <button type = 'button' className = 'btn btn-secondary' onClick={() => createUser()} disabled={!userName || !password}>Create</button>
              </div>
            </form>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}