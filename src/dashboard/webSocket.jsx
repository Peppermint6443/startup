import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

import { PrintNotifier } from './printNotifier';

export function WebSock() {
    const [events, updateEvents] = React.useState([]);

    React.useEffect(() => {
        PrintNotifier.addEvent(handleEvent);

        return () => {
            PrintNotifier.removeEvent(handleEvent);
        };
    });

    function handleEvent(event) {
        updateEvents([...events, event]);
    }

    function createEventArray() {
        const msgArray = [];
        const recentEvents = events.slice(-4);
        for (const [i,event] of recentEvents.entries()) {
            let msg = 'unknown';
            if (event.type === 'print') {
                msg = ` printed ${event.value.name}`;
            } else if (event.type === 'roll') {
                msg = ` started a new roll: ${event.value.name}`;
            }

            msgArray.push(
                <div key={i} className = 'event'>
                    <span className = {'player-event'}>{event.from.split('@')[0]}{msg}</span>
                </div>
            )
        }

        return msgArray;
    }
    
    return (
        <div className = 'main'>
            <div className = 'event-list'>
                {createEventArray()}
            </div>
        </div>
    );
}