import React from 'react';
import './dashboard.css';

import { v4 as uuidv4 } from 'uuid';

export function NewRoll(props) {
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
                    setRollers([]);
                }
            }
        } catch (error) {
            console.error("Error parsing roll-array:", error);
            setRollers([]);
        }
    }, []);

    const addRoll = () => {
        if (!rollName.trim()) {
            alert("Please enter a roll name.");
            return;
        }

        const newRoll = {
            id: uuidv4(),
            name: rollName.trim(),
            color: rollColorPicker,
            colorName: rollColor, 
            brand: rollBrand.trim(),
            filamentRemaining: filamentRemaining.trim(),
            diameter: diameter.trim(),
            filamentType: filamentType.trim(),
            dateOpened: dateOpened.trim()
        };

        const newRollArray = [...roll_array, newRoll];
        setRollers(newRollArray);
        localStorage.setItem('roll-array', JSON.stringify(newRollArray));
        props.updateAddRoll(false);
    };

    const [rollName, setRollName] = React.useState('');
    const [rollColor, setRollColor] = React.useState('');
    const [rollColorPicker, setRollColorPicker] = React.useState('');
    const [rollBrand, setRollBrand] = React.useState('');
    const [filamentRemaining, setFilamentRemaining] = React.useState('');
    const [diameter, setDiameter] = React.useState('');
    const [filamentType, setFilamentType] = React.useState('');
    const [dateOpened, setDateOpened] = React.useState('');

    return (
        <form className="new-roll-form">
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Roll Name" 
                    value={rollName} 
                    onChange={(e) => setRollName(e.target.value)} 
                />
            </div>
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Roll Color" 
                    value={rollColor} 
                    onChange={(e) => setRollColor(e.target.value)} 
                />
            </div>
            <div className="form-items">
                <input 
                    type="color" 
                    className="form-input" 
                    value={rollColorPicker} 
                    onChange={(e) => setRollColorPicker(e.target.value)} 
                />
            </div>
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input"
                    placeholder = 'Filament Type' 
                    value={filamentType} 
                    onChange={(e) => setFilamentType(e.target.value)} 
                />
            </div>            
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Brand" 
                    value={rollBrand} 
                    onChange={(e) => setRollBrand(e.target.value)} 
                />
            </div>
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input"
                    placeholder = 'Diameter (mm)' 
                    value={diameter} 
                    onChange={(e) => setDiameter(e.target.value)} 
                />
            </div>
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input"
                    placeholder = 'Filament Amount (g)' 
                    value={filamentRemaining} 
                    onChange={(e) => setFilamentRemaining(e.target.value)} 
                />
            </div>
            <div className="form-items">
                <input 
                    type="text" 
                    className="form-input"
                    placeholder = 'Date Opened' 
                    value={dateOpened} 
                    onChange={(e) => setDateOpened(e.target.value)} 
                />
            </div>


            <div className="form-buttons">
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={addRoll}
                >
                    Save
                </button>
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => props.updateAddRoll(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
