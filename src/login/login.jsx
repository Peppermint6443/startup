import React from 'react';

import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authState.js';
import { ThirdParty } from './thirdParty';


export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className = 'main'>
      <section className = 'login-box'>
          {authState !== AuthState.Unknown && <h4 className = 'login-box-title'>Welcome to Roll Call!</h4>}

          {authState === AuthState.Authenticated && (
            <Authenticated userName = {userName} onLogout = {() => onAuthChange(userName, AuthState.Unauthenticated)} />
          )}

          {authState === AuthState.Unauthenticated && (
            <Unauthenticated 
              userName = {userName}
              onLogin = {(loginUserName) => {
                onAuthChange(loginUserName, AuthState.Authenticated);
              }}
              />
          )}

          {/* <form className = 'login-form'>
              <div className = 'form-items'>
                  <input type = 'text' className = 'form-input' placeholder = 'Email Address'></input>
              </div>
              <div className = 'form-items'>
                  <input type = 'password' className = 'form-input' placeholder = 'Password'></input>
              </div>
              <div className = 'form-buttons '>
                  <button type = 'button' className = 'btn btn-primary'>Login</button>
                  <button type = 'button' className = 'btn btn-secondary'>Create</button>
              </div>
          </form> */}
      </section>
      
        <ThirdParty />
  </main>
  );
}