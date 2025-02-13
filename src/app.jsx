import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className = 'body'>
        <header className = 'header'>
            <div className = 'menu-icon'><ion-icon name="menu-outline"></ion-icon></div>
            <h1 className = 'header-text'>
                <img src = 'yellow.png' alt = 'logo' class = 'logo'/>
                <p className = 'header-text'>Roll Call</p>
            </h1>
            <nav className = 'nav'>
                <p><a href = 'index.html'>Home</a></p>
                <p><a href = 'dashboard.html'>Dashboard</a></p>
                <p><a href = 'roll.html'>Filament Roll Page</a></p>
                <p><a href = 'stats.html'>Stats</a></p>
                <p><a href = 'about.html'>About</a></p>
            </nav>
        </header>

        <main>App components go here</main>

        <footer>
            <span>Author: Ethan Thompson</span>
            <p><a href = 'https://github.com/Peppermint6443/startup'>Github Link</a></p>
        </footer>
    </div>
  );
}