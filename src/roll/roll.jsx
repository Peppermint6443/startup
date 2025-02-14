import React from 'react';

export function Roll() {
  return (
    <main className = 'main'>
      <div className = 'roll-header'>
          <button type = 'button' className = 'btn btn-light'>Add print</button>
      </div>
      <div className = 'roll-info-container'>
          <div className = 'roll-image'>
              <span><img src = 'orange.png' width = '300px'/></span>
          </div>
          <div>
              <div className = 'roll-info'>
                  <p className = 'roll-info-text'>Filament Left: 80g</p>
                  <p className = 'roll-info-text'>Filament Color: Orange</p>
                  <p className = 'roll-info-text'>Filament Type: PLA</p>
                  <p className = 'roll-info-text'>Filament Diameter: 1.75mm</p>
                  <p className = 'roll-info-text'>Filament Brand: Bambu Labs</p>
              </div>
              <div>
                  <button type = 'button' className = 'btn btn-light'>View roll history</button>
              </div>
          </div>
      </div>
  </main>
  );
}