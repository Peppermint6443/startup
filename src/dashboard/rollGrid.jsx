import React from 'react';

import './dashboard.css';
import { RollSvg } from '../roll_svg';


export function RollGrid() {
    const [roll_array, setRollers] = React.useState([]);

    React.useEffect(() => {
        const roll_array = localStorage.getItem('roll-array');
        if (roll_array) {
            setRollers(JSON.parse(scoresText));
        }
    }, []);

    const rollItems = [];
    if (roll_array.length) {
        console.log(1);
        for (const [i,roll] of roll_array.entries()) {
            rollItems.push(
                <div className = 'please-fix-this'>
                    <NavLink to = 'roll/${roll.name}'>
                        <RollSvg color = {'roll.color'} classes = {'roll-image'} />
                    </NavLink>
                    <p>{roll.name}</p>
                </div>
            );
        }
    } else {
        console.log('nothing to see here');
    }
    
    if (roll_array.length) {
        return (
            <div className = 'roll-table'>
                {rollItems}
            </div>
        );
    } else {
        return (
            <p className = 'no-rolls'>Hurry, add your first roll!!</p>
        );
    }
}