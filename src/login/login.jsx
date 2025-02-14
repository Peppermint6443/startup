import React from 'react';

export function Login() {
  return (
    <main className = 'main'>
      <section className = 'login-box'>
          <h4 className = 'login-box-title'>Login</h4>
          <form className = 'login-form'>
              <div className = 'form-items'>
                  <input type = 'text' className = 'form-input' placeholder = 'Email Address'></input>
              </div>
              <div className = 'form-items'>
                  <input type = 'password' className = 'form-input' placeholder = 'Password'></input>
              </div>
              <div className = 'form-buttons'>
                  <button type = 'button' className = 'btn btn-primary'>Login</button>
                  <button type = 'button' className = 'btn btn-secondary'>Create</button>
              </div>
          </form>
      </section>
      <section className = 'third-party'>
          <h4>3D Print of the Day! (3rd party API)</h4>
      </section>
  </main>
  );
}