import React from 'react';
import { NavLink } from 'react-router-dom';

import './dashboard.css';
import { RollSvg } from './roll_svg';

export function Dashboard() {
  return (
    <main className = 'main'>
      <h4 className = 'websocket-standin'>Congratulations to John Doe! John just finished a 48th roll of pink filament!</h4>
      <p className = 'wssi'>(↑ Websocket placeholder ↑)</p>
      <button type = 'button' className = 'btn btn-light'>+ Add Roll</button>
      <div className = 'roll-table'>
          <div className = 'please-fix-this'><NavLink to = 'roll'><RollSvg color = {'#ff0000'} /></NavLink></div>
          <div className = 'please-fix-this'><NavLink to = 'roll'><RollSvg color = {'#0047ba'} /></NavLink></div>
          <div className = 'please-fix-this'><NavLink to = 'roll'><RollSvg color = {'#fce703'} /></NavLink></div>
          <div className = 'please-fix-this'><NavLink to = 'roll'><RollSvg color = {'#ff9933'} /></NavLink></div>
          <div className = 'please-fix-this'><NavLink to = 'roll'><RollSvg color = {'#000000'} /></NavLink></div>
          <div className = 'please-fix-this'><NavLink to = 'roll'><RollSvg color = {'#ffffff'} /></NavLink></div>
      </div>
    </main>
  );
}