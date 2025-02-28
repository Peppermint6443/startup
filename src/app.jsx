import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Roll } from './roll/roll';
import { Stats } from './stats/stats';
import { About } from './about/about';
import { RollSvg } from './roll_svg';

import { AuthState } from './login/authState';

import './app.css';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
        <div className = 'body'>
            <header className = 'header'>
                <div className = 'menu-icon'><ion-icon name="menu-outline"></ion-icon></div>
                <h1 className = 'header-text'>
                    <NavLink className = 'nav-link' to = ''><RollSvg color = {'#fce703'} classes = {'logo'} /></NavLink>
                    <NavLink className = 'nav-link' to = ''><p className = 'header-text'>Roll Call</p></NavLink>
                </h1>
                <nav className = 'nav'>
                    <p><NavLink className = 'nav-link' to = ''>Login</NavLink></p>
                    {authState === AuthState.Authenticated && (
                        <p><NavLink className = 'nav-link' to = 'dashboard'>Dashboard</NavLink></p>
                    )}
                    {authState === AuthState.Authenticated && (
                        <p><NavLink className = 'nav-link' to = 'stats'>Stats</NavLink></p>
                    )}
                    <p><NavLink className = 'nav-link' to = 'about'>About</NavLink></p>
                </nav>
            </header>

            <Routes>
                <Route 
                    path = '/' 
                    element = {
                        <Login 
                            userName = {userName}
                            authState = {authState}
                            onAuthChange = {(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }}
                        />} 
                        exact />
                <Route path = '/dashboard' element={<Dashboard userName = {userName} />} />
                <Route path = '/roll/:name' element={<Roll />} />
                <Route path = '/stats' element={<Stats />} />
                <Route path = '/about' element={<About />} />
                <Route path = '*' element={<NotFound />} />
            </Routes>

            <footer>
                <span>Author: Ethan Thompson</span>
                <p><a href = 'https://github.com/Peppermint6443/startup'>Github Link</a></p>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }