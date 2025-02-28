import React from 'react';
import { NavLink } from 'react-router-dom';

import './dashboard.css';
import { RollSvg } from '../roll_svg';

import { RollGrid } from './rollGrid';
import { AddRoll } from './addRoll';
import { WebSock } from './webSocket';
import { NewRoll } from './newRoll';

export function Dashboard() {
  const [addroll, updateTheAddRoll] = React.useState(false);
  
  return (
    <main className = 'main'>
      <WebSock />
      { addroll === false &&
        <AddRoll 
          updateAddRoll = {(a) => updateTheAddRoll(a)}
        />
      }
      { addroll === false &&
        <RollGrid />
      }

      { addroll === true &&
        <NewRoll 
          updateAddRoll = {(a) => updateTheAddRoll(a)}
        />
      }
    </main>
  );
}