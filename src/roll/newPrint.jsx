import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { RollSvg } from '../roll_svg';
import { PrintNotifier } from '../dashboard/printNotifier';

import { v4 as uuidv4 } from 'uuid';

import './roll.css';

export function NewPrint(props) {
    const { name } = useParams(); // Get name from the URL
    const location = useLocation(); // Get ID from the link state
    const [rollArray, setRollArray] = React.useState([]);
    const [rollItem, setRollItem] = React.useState(null);
    const [addPrint, updateTheAddPrint] = React.useState(false);
    
    const [printName, setPrintName] = React.useState('');
    const [printDate, setPrintDate] = React.useState('');
    const [filamentUsed, setFilamentUsed] = React.useState('');
    const [printNotes, setPrintNotes] = React.useState('');

    const userName = localStorage.getItem('userName') || 'unknown';


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
        } catch (error) {
            console.error("Error parsing roll-array:", error);
        }
    }, [name, location.state]); // Re-run when name or state changes

    if (!rollItem) {
        return <p>Loading roll data...</p>;
    }

    async function addaPrint() {
        if (!printName.trim()) {
            alert("Please enter a print name.");
            return;
        }

        const newPrint = {
            owner: localStorage.getItem('userName'),
            id: uuidv4(),
            name: printName.trim(),
            rollId: rollItem.id,
            date: printDate.trim(),
            filamentUsed: filamentUsed.trim(),
            printNotes: printNotes.trim()
        };

        await fetch('/api/addrollhistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPrint),
        })
  
        PrintNotifier.broadcastEvent(userName, 'print', newPrint);
        props.updateAddPrint(false);
    };

    async function updateFilamentRemaining() {
        const newFilamentRemaining = rollItem.filamentRemaining - filamentUsed;
        const updatedRoll = {
            owner: localStorage.getItem('userName'),
            id: rollItem.id,
            name: rollItem.name,
            color: rollItem.color,
            colorName: rollItem.colorName,
            brand: rollItem.brand,
            initialFilament: rollItem.initialFilament,
            filamentRemaining: newFilamentRemaining,
            diameter: rollItem.diameter,
            filamentType: rollItem.filamentType,
            dateOpened: rollItem.dateOpened
        };

        await fetch('/api/roll/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedRoll),
        })
    }

    return (
        <form className="new-roll-form">
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Print Name" 
                    value={printName} 
                    onChange={(e) => setPrintName(e.target.value)} 
                />
            </div>
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Print Date" 
                    value={printDate} 
                    onChange={(e) => setPrintDate(e.target.value)} 
                />
            </div>
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input"
                    placeholder = 'Filament Used (g)' 
                    value={filamentUsed} 
                    onChange={(e) => setFilamentUsed(e.target.value)} 
                />
            </div>            
            <div className="form-items">
                <textarea 
                    className="form-input" 
                    placeholder="Print Notes" 
                    value={printNotes} 
                    onChange={(e) => setPrintNotes(e.target.value)} 
                />
            </div>


            <div className="form-buttons">
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={() => {
                        updateFilamentRemaining();
                        addaPrint();
                    }}
                >
                    Save
                </button>
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => props.updateAddPrint(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
