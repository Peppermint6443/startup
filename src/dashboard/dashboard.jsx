import React from 'react';
import { NavLink } from 'react-router-dom';

import './dashboard.css';

export function Dashboard() {
  return (
    <main className = 'main'>
      <h4 className = 'websocket-standin'>Congratulations to John Doe! John just finished a 48th roll of pink filament!</h4>
      <p className = 'wssi'>(↑ Websocket placeholder ↑)</p>
      <button type = 'button' className = 'btn btn-light'>+ Add Roll</button>
      <div className = 'roll-table'>
          <div><NavLink to = 'roll'><img src = 'red.png' width = '300px' className = 'roll-image'/></NavLink></div>
          <div><NavLink to = 'roll'><img src = 'yellow.png' width = '300px' className = 'roll-image'/></NavLink></div>
          <div><NavLink to = 'roll'><img src = 'orange.png' width = '300px' className = 'roll-image'/></NavLink></div>
          <div><NavLink to = 'roll'><img src = 'blue.png' width = '300px' className = 'roll-image'/></NavLink></div>
          <div><NavLink to = 'roll'><img src = 'white.png' width = '300px' className = 'roll-image'/></NavLink></div>
      </div>
    </main>
  );
}