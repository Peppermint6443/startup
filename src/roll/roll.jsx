// import React from 'react';

// import { useLocation } from 'react-router-dom';

// import './roll.css';

// export function Roll() {
//     const location = useLocation();
//     const roll = location.state?.roll;

//     const [roll_array, setRollers] = React.useState([]);
    
//     React.useEffect(() => {
//         try {
//             const roll_text = localStorage.getItem('roll-array');
//             if (roll_text) {
//                 const parsedRolls = JSON.parse(roll_text);
//                 if (Array.isArray(parsedRolls)) {
//                     setRollers(parsedRolls);
//                 } else {
//                     console.error("Stored roll-array is not an array");
//                 }
//             }
//         } catch (error) {
//             console.error("Error parsing roll-array:", error);
//         }
//     }, []);

//     // find the roll with the correct name
//     const rollIndex = roll_array.findIndex((r) => r.name === roll.name);
//     const rollItem = roll_array[rollIndex];

//     console.log(rollItem);

//     return (
//         <main className = 'main'>
//         <div className = 'roll-header'>
//             <button type = 'button' className = 'btn btn-light'>Add print</button>
//         </div>
//         <div className = 'roll-info-container'>
//             <div> {/*className = 'roll-image'>*/}
//                 <span><img src = 'orange.png' width = '300px'/></span>
//             </div>
//             <div>
//                 <div className = 'roll-info'>
//                     <p className = 'roll-info-text'>Filament Left: 80g</p>
//                     <p className = 'roll-info-text'>Filament Color: Orange</p>
//                     <p className = 'roll-info-text'>Filament Type: PLA</p>
//                     <p className = 'roll-info-text'>Filament Diameter: 1.75mm</p>
//                     <p className = 'roll-info-text'>Filament Brand: Bambu Labs</p>
//                 </div>
//                 <div>
//                     <button type = 'button' className = 'btn btn-light'>View roll history</button>
//                 </div>
//             </div>
//         </div>
//     </main>
//     );
// }


import React from 'react';
import { useParams } from 'react-router-dom';

import './roll.css';

export function Roll() {
    const { id } = useParams();  // Get roll ID from the URL
    const [rollArray, setRollArray] = React.useState([]);
    const [rollItem, setRollItem] = React.useState(null);

    React.useEffect(() => {
        try {
            const rollText = localStorage.getItem('roll-array');
            if (rollText) {
                const parsedRolls = JSON.parse(rollText);
                if (Array.isArray(parsedRolls)) {
                    setRollArray(parsedRolls);
                    const selectedRoll = parsedRolls.find((r) => r.id === id);
                    setRollItem(selectedRoll);
                } else {
                    console.error("Stored roll-array is not an array");
                }
            }
        } catch (error) {
            console.error("Error parsing roll-array:", error);
        }
    }, [id]);

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
