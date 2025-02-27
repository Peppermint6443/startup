import React from 'react';

export function RollSvg(props) {
    const color = props.color
    const classes = props.classes

    return (
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className = {classes}>
            {/* <!-- Background --> */}
            {/* <!-- <rect width="100%" height="100%" fill="#6C9EDC" stroke="black" stroke-width="4"/> --> */}
            
            {/* <!-- Left spool side --> */}
            <ellipse cx="85" cy="100" rx="15" ry="60" fill="lightgray" stroke="black" stroke-width="4"/>
            {/* <!-- <ellipse cx="85" cy="100" rx="5" ry="40" fill="#6C9EDC" stroke="black" stroke-width="4"/> --> */}

            {/* <!-- Filament section --> */}
            <ellipse cx="85" cy="100" rx="6" ry="45" fill={color} stroke="black" stroke-width="4"/>

            <rect x="85" y="55" width="30" height="1" fill={color} stroke="black" stroke-width="4"/>
            <rect x="85" y="143" width="30" height="1" fill={color} stroke="black" stroke-width="4"/>
            
            <rect x="85" y="57" width="30" height="85" fill={color} />
            
            {/* <!-- Right spool side --> */}
            <ellipse cx="115" cy="100" rx="15" ry="60" fill="lightgray" stroke="black" stroke-width="4"/>
            <ellipse cx="115" cy="100" rx="5" ry="40" fill="#000000" stroke="black" stroke-width="4"/>
        
        </svg>

    );
}