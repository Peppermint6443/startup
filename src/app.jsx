import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Roll } from './roll/roll';
import { Stats } from './stats/stats';
import { About } from './about/about';


export default function App() {
  return (
    <BrowserRouter>
        <div className = 'body'>
            <header className = 'header'>
                <div className = 'menu-icon'><ion-icon name="menu-outline"></ion-icon></div>
                <h1 className = 'header-text'>
                    <img src = 'yellow.png' alt = 'logo' class = 'logo'/>
                    <p className = 'header-text'>Roll Call</p>
                </h1>
                <nav className = 'nav'>
                    <p><NavLink className = 'nav-link' to = ''>Login</NavLink></p>
                    <p><NavLink className = 'nav-link' to = 'play'>Play</NavLink></p>
                    <p><NavLink className = 'nav-link' to = 'roll'>Roll</NavLink></p>
                    <p><NavLink className = 'nav-link' to = 'stats'>Stats</NavLink></p>
                    <p><NavLink className = 'nav-link' to = 'about'>About</NavLink></p>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/play' element={<Play />} />
                <Route path='/scores' element={<Scores />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
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