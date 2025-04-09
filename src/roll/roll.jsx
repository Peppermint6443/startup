import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { RollSvg } from '../roll_svg';
import { NewPrint } from './newPrint';
import { AddPrint } from './addPrint';

import './roll.css';

export function Roll() {
    const { name } = useParams(); // Get name from the URL
    const location = useLocation(); // Get ID from the link state
    const [rollArray, setRollArray] = React.useState([]);
    const [rollItem, setRollItem] = React.useState(null);
    const [addPrint, updateTheAddPrint] = React.useState(false);
    const [dispHist, updateDispHist] = React.useState(false);
    const [history, setRollHistory] = React.useState([]);

    React.useEffect(() => {
        try {

            // update to use service instead of local storage
            fetch('/api/rolls')
                .then(response => response.json())
                .then(data => {
                    setRollArray(data);

                    // Get the roll ID from state if available
                    let rollId = location.state?.id;

                    // If navigating directly, find the roll by name
                    if (!rollId) {
                        const foundRoll = data.find(
                            (r) => encodeURIComponent(r.name.replace(/\s+/g, '-')) === name
                        );
                        rollId = foundRoll?.id;
                    }

                    // Find the correct roll by ID
                    const selectedRoll = data.find((r) => r.id === rollId);
                    setRollItem(selectedRoll);
                })

                // await fetch('/api/addrollhistory', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(newPrint),
                // })

            fetch(`/api/rollhistory?id=${encodeURIComponent(location.state?.id)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    // Get the roll ID from state if available
                    let rollId = location.state?.id;

                    // If navigating directly, find the roll by name
                    if (!rollId) {
                        const foundRoll = data.find(
                            (r) => encodeURIComponent(r.name.replace(/\s+/g, '-')) === name
                        );
                        rollId = foundRoll?.id;
                    }
                    
                    // const histories = data.find((r) => r.id === rollId);
                    setRollHistory(data);
                });
        } catch (error) {
            console.error("Error parsing roll-array:", error);
        }
    }, [name, location.state]); // Re-run when name or state changes

    if (!rollItem) {
        return <p>Loading roll data...</p>;
    }

    function toggleHistory() {
        if (dispHist === false) {
            updateDispHist(true);
        }
        else {
            updateDispHist(false);
        }
    }

    return (
        <main className="main-items">
            <div className = "roll-info-item">
                <RollSvg color={rollItem.color} classes="roll-image-not-link" />
            </div>
            
            {/* if not adding a roll */}
            { addPrint === false && 
                <div className="roll-info-container">
                    <AddPrint 
                        updateAddPrint = {(a) => updateTheAddPrint(a)}
                    />
                    <div className = 'roll-data'>
                        <div className="roll-info">
                            <h2 className="roll-info-text roll-name-header">{rollItem.name}</h2>
                            <p className="roll-info-text">Filament Left: {rollItem.filamentRemaining} g</p>
                            <p className="roll-info-text">Filament Color: {rollItem.colorName}</p>
                            <p className="roll-info-text">Filament Type: {rollItem.filamentType}</p>
                            <p className="roll-info-text">Filament Brand: {rollItem.brand}</p>
                            <p className="roll-info-text">Filament Diameter: {rollItem.diameter} mm</p>
                            <p className="roll-info-text">Date Opened: {rollItem.dateOpened}</p>
                        </div>
                        { dispHist === true &&
                            <div className="roll-history">
                                <div className = 'roll-history roll-header'>
                                    <button type="button" className="btn btn-light" onClick={() => toggleHistory()}>Hide roll history</button>
                                </div>
                                <div className = 'roll-history'>
                                    <h3 className="roll-hist-header">Roll History</h3>
                                    {history.map((item, index) => (
                                        <div key={index} className="roll-history-item">
                                            <p className="roll-info-text">{item.name}</p>
                                            <p className="roll-info-text">Filament Used: {item.filamentUsed} g</p>
                                            <p className="roll-info-text">Date: {item.date}</p>
                                            <p className="roll-info-text">Notes: {item.printNotes}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                        { dispHist === false &&
                            <div className = 'roll-history roll-header'>
                                <button type="button" className="btn btn-light" onClick={() => toggleHistory()}>View roll history</button>
                            </div>} 
                    </div>
                </div>
            }

            {/* if adding a roll  */}
            { addPrint === true &&
                <NewPrint 
                    updateAddPrint = {(a) => updateTheAddPrint(a)}
                />
            }
        </main>
    );
}
