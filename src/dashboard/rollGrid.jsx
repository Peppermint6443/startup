// import React from 'react';

// import './dashboard.css';
// import { RollSvg } from '../roll_svg';


// export function RollGrid() {
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

//     const rollItems = [];
//     if (roll_array.length) {
//         for (const [i,roll] of roll_array.entries()) {
//             rollItems.push(
//                 <div key = {i} className = 'please-fix-this'>
//                     <NavLink to = {`roll/${roll.name}`}>
//                     {/* <NavLink to = 'roll/'> */}
//                         <RollSvg color = {'#000000'} classes = {'roll-image'} />
//                     </NavLink>
//                     <p>hello</p>
//                 </div>
//             );
//         }
//     } else {
//         console.log('nothing to see here');
//     }
    
//     if (roll_array.length) {
//         return (
//             <div className = 'roll-table'>
//                 {rollItems}
//             </div>
//         );
//     } else {
//         return (
//             <p className = 'no-rolls'>Hurry, add your first roll!!</p>
//         );
//     }
// }


import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';
import { RollSvg } from '../roll_svg';

export function RollGrid() {
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

    if (roll_array.length === 0) {
        return <p className="no-rolls">Hurry, add your first roll!!</p>;
    }

    return (
        <div className="roll-table table-item">
            {roll_array.map((roll) => {
                // Encode the roll name for a clean URL
                const encodedName = encodeURIComponent(roll.name.replace(/\s+/g, '-'));
    
                return (
                    <NavLink 
                        key={roll.id} 
                        to={`../roll/${encodedName}`} 
                        state={{ id: roll.id }} 
                        className="table-item"
                    >
                        <div className="roll-container">
                            <RollSvg color={roll.color} classes="roll-image" />
                            <p className="table-text">{roll.name}</p>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
    
    
}
