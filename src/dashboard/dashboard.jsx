import React from 'react';
import { NavLink } from 'react-router-dom';

import './dashboard.css';
import { RollSvg } from '../roll_svg';

import { RollGrid } from './rollGrid';
import { AddRoll } from './addRoll';
import { WebSock } from './webSocket';

export function Dashboard() {
  return (
    <main className = 'main'>
      <WebSock />
      <AddRoll />
      <RollGrid />
    </main>
  );
}