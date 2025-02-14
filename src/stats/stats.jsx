import React from 'react';
import './stats.css';

export function Stats() {
  return (
    <main className = 'main'>
      <div className = 'statistics-table'>
          <div className = 'stat prints'><ion-icon name="server-outline"></ion-icon><p>Prints Completed: </p><p>64 Prints</p></div>
          <div className = 'stat filament-used'><ion-icon name="layers-outline"></ion-icon><p>Total Filament Used: </p><p>3.354 kg</p></div>
          <div className = 'stat filament-left'><ion-icon name="analytics-outline"></ion-icon><p>Filament Remaining: </p><p>4.596 kg</p></div>
          <div className = 'stat completed-rolls'><ion-icon name="disc-outline"></ion-icon><p>Total Completed Rolls: </p><p>14 Rolls</p></div>
          <div className = 'stat meters'><ion-icon name="menu-outline"></ion-icon><p>Meters of Filament Printed: </p><p>2016 m</p></div>
          <div className = 'stat total-cost'><ion-icon name="cash-outline"></ion-icon><p>Total Cost of Filament Used: </p><p>$73.79</p></div>
      </div>
      
  </main>
  
  );
}