import '../styles/user.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function User() {
    const [volunteerEvents, setVolunteerEvents] = useState([]);
    useEffect(() => {
        const getVolunteerEvents = async () => {
            try {
                const response = await axios.get("http://localhost:3001/volunteerUserEvents")
                setVolunteerEvents(response.data)
            } catch(err) {
                console.log(err)
            }
        };
        getVolunteerEvents();
        }, [])

    return (
        <>
            <h2>Welcome User</h2>
            {volunteerEvents.map((volunteerEvent) => 
            {return (
                <>
                 <p>{volunteerEvent.volunteerID}</p>
                 <p>{volunteerEvent.eventID}</p>
                </>
            )}
            )}
        </>
    )
}