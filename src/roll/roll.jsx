import React from 'react';

import { useLocation } from 'react-router-dom';

import './roll.css';

export function Roll() {
    const location = useLocation();
    const roll = location.state?.roll;

    const [roll_array, setRollers] = React.useState([]);
    
    React.useEffect(() => {
        try {
            const roll_text = localStorage.getItem('roll-array');
            if (roll_text) {
                const parsedRolls = JSON.parse(roll_text);
                if (Array.isArray(parsedRolls)) {
                    setRollers(parsedRolls);
                } else {
                    console.error("Stored roll-array is not an array");
                }
            }
        } catch (error) {
            console.error("Error parsing roll-array:", error);
        }
    }, []);

    // find the roll with the correct name
    const rollIndex = roll_array.findIndex((r) => r.name === roll.name);
    const rollItem = roll_array[rollIndex];

    console.log(rollItem);

    return (
        <main className = 'main'>
        <div className = 'roll-header'>
            <button type = 'button' className = 'btn btn-light'>Add print</button>
        </div>
        <div className = 'roll-info-container'>
            <div> {/*className = 'roll-image'>*/}
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