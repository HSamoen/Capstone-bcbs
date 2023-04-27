import '../styles/user.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function User() {
    const { volunteerID } = useParams();
    const [volunteer, setVolunteer] = useState([]);
    const [volunteerEvents, setVolunteerEvents] = useState([]);

    useEffect(() => {
        const getVolunteerEvents = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/volunteerUserEvents/${localStorage.getItem('volunteerID')}`)
                setVolunteerEvents(response.data)
            } catch(err) {
                console.log(err)
            }
        };
        getVolunteerEvents();
        }, [volunteerID])

    useEffect(() => {
        const getVolunteer = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/User/${localStorage.getItem('volunteerID')}`)
                setVolunteer(response.data)
            } catch(err) {
                console.log(err)
            }
        };
        getVolunteer();
        }, [volunteerID])

    return (
        <>
            <p>Name: {volunteer.full_name}</p>
            <p>Email: {volunteer.email}</p>

            <h2 className="userGreet">Welcome User</h2>

            {volunteerEvents.map((volunteerEvent) => 
            {return (
                <>
                <section className="volunteering">
                            <section className="volunteerOpHeading">
                                <h2>{volunteerEvent.event_header}</h2>
                                <h3>{volunteerEvent.event_name}</h3>
                                <img src={volunteerEvent.image} alt={volunteerEvent.alt} />
                                <p>{volunteerEvent.location}</p>
                                <p>{volunteerEvent.organizer}</p>
                                <p>{volunteerEvent.dates}</p>
                                <p>{volunteerEvent.total_needed}</p>
                            </section>
                            <section className="volunteerOpData">
                                <h5 className="event">{volunteerEvent.description_header}</h5>
                                <p className="eventdesc">{volunteerEvent.event_description}</p>
                            </section>
                        </section>
                </>
            )}
            )}
        </>
    )
}