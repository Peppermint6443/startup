import React from 'react';
import './about.css';

export function About() {
  return (
      <main className = 'main'>
        <h4>Introduction</h4>
        <p className = 'problem-causer'>Are you tired of not knowing if you have enough filament to complete the cool 3D print you found? Imagine starting a print you are super excited about, only to have the filament run out right before the print finishes. Do you leave it on your printer until the new filament roll arrives? Do you waste the filament you had left? Luckily, with Roll Call, you can avoid this predicament entirely!</p>
        <p className = 'problem-causer'>Roll Call is an easy-to-use website that tracks your filament so you don't have to! It allows you to track the amount of filament left on each roll (including color, brand, type, and cost), log print history, and manage your filament stores. </p>
        <p className = 'problem-causer'>Don't wait until you ruin another print, let Roll Call take attendance, you focus on creating the next big thing!</p>
        
        <div>
            <h4>Features</h4>
            <ul>
                <li>Secure Login</li>
                <li>Data storage connected to your account</li>
                <li>Ability to add rolls of filament, specifying Brand, color, starting amount, type, price, etc.</li>
                <li>Ability to add print mass to update the roll, with a name for the print for recording</li>
                <li>Ability to see a history of prints for each roll</li>
                <li>Display all of the rolls, with a status bar showing how much has been used/is left</li>
            </ul>
        </div>
    </main>
  );
}