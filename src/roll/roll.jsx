import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import './roll.css';

export function Roll() {
    const { name } = useParams(); // Get name from the URL
    const location = useLocation(); // Get ID from the link state
    const [rollArray, setRollArray] = React.useState([]);
    const [rollItem, setRollItem] = React.useState(null);

    React.useEffect(() => {
        try {
            const rollText = localStorage.getItem('roll-array');
            if (rollText) {
                const parsedRolls = JSON.parse(rollText);
                if (Array.isArray(parsedRolls)) {
                    setRollArray(parsedRolls);

                    // Get the roll ID from state if available
                    let rollId = location.state?.id;

                    // If navigating directly, find the roll by name
                    if (!rollId) {
                        const foundRoll = parsedRolls.find(
                            (r) => encodeURIComponent(r.name.replace(/\s+/g, '-')) === name
                        );
                        rollId = foundRoll?.id;
                    }

                    // Find the correct roll by ID
                    const selectedRoll = parsedRolls.find((r) => r.id === rollId);
                    setRollItem(selectedRoll);
                } else {
                    console.error("Stored roll-array is not an array");
                }
            }
        } catch (error) {
            console.error("Error parsing roll-array:", error);
        }
    }, [name, location.state]); // Re-run when name or state changes

    if (!rollItem) {
        return <p>Loading roll data...</p>;
    }

    return (
        <main className="main">
            <div className="roll-header">
                <button type="button" className="btn btn-light">Add print</button>
            </div>
            <div className="roll-info-container">
                <div>
                    <span><img src={rollItem.image || 'orange.png'} width="300px" alt={rollItem.name} /></span>
                </div>
                <div>
                    <div className="roll-info">
                        <p className="roll-info-text">Filament Left: {rollItem.filamentLeft}g</p>
                        <p className="roll-info-text">Filament Color: {rollItem.color}</p>
                        <p className="roll-info-text">Filament Type: {rollItem.type}</p>
                        <p className="roll-info-text">Filament Diameter: {rollItem.diameter}mm</p>
                        <p className="roll-info-text">Filament Brand: {rollItem.brand}</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-light">View roll history</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
