import { NavLink } from 'react-router-dom';
import '../styles/takeAction.css';
// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import events from '../data/events.json';

export default function TakeAction() {
    // const [events, setEvents] = useState([]);
    const [buttonStates, setButtonStates] = useState({});

    const handleClick = (eventId, volunteerID) => {
        setButtonStates((prevState) => ({
          ...prevState,
          [eventId]: true, // set the clicked button's state to true
        }));
        addVolunteerEvent(volunteerID, eventId); // call the function to handle the click event
    };

    // useEffect(() => {
    //     const getEvents = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:3001/get")
    //             setEvents(response.data)
    //         } catch(err) {
    //             console.log(err)
    //         }
    //     };
    //     getEvents();
    //     }, [])
 
    const addVolunteerEvent = async (volunteerID, eventID) => {
        const volunteerEvent = {volunteerID, eventID};
        try {
            const response = await axios.post("http://localhost:3001/volunteerEvents", volunteerEvent)
        } catch(err) {
            console.log(err)
        }
    };

    return (
        <>
            <section className="takeActionLand">
                <h2 className="takeActionHeader">Take Action!</h2>
            </section>
            <section className="takeActionIdeas">
                <section className="actionIdea">
                    <NavLink to="/loginregister"  className="actionIdeaHeader partnerWithUs">Partner with us</NavLink>
                    <p className="actionIdeaText">Sign up and become a member. Wellness Plus partners with companies to help end hunger through food drives and corporate donations. Helping neighbors in need is something we can all do together.</p>
                </section>

                <section className="actionIdea">
                    <a href="#volunteer" className="actionIdeaHeader volunteerSection">Volunteer</a>
                    <p className="actionIdeaText">With millions of other food bank volunteers, your time makes a difference in the lives of your neighbors facing hunger. You can volunteer at your local food bank</p>
                </section>

                <section className="actionIdea">
                    <NavLink to="/donate" className="actionIdeaHeader donateSection">Donate</NavLink>
                    <p className="actionIdeaText">Every dollar helps. Your support helps provide food and hope to families, children, and seniors right here in our communities. Together we make a lasting impact for children, families and seniors who are struggling in our region. Your support today will fill more plates with food and hearts with hope.</p>
                </section>

                <section className="actionIdea">
                    <a href="#foodDrive" className="actionIdeaHeader foodDriveSection">Host a food drive</a>
                    <p className="actionIdeaText">Food drives are a great way to help our neighbors. Learn how to make your food drive a success.</p>
                </section>
            </section>

            <h2 id="volunteer">Volunteer Opportunities</h2>
            <section className="volunteerContainer">
                <section className="volunteerContent">
                    <h3>What it's like to support a food bank</h3>
                    <p>Every volunteer experience is a little different. Here are some things you might do as a volunteer:</p>
                    <ul>
                        <li>Sort and pack food: You can keep the shelves stocked by assembling food boxes for distribution.</li>
                        <li>Assist at mobile pantries, drive-thru pantries, and no-contact distributions: Help your neighbors feed their families.</li>
                        <li>Deliver meals: With many communities sheltering in place, you can help ensure our most vulnerable neighbors have the food they need while staying safe.</li>
                        <li>Glean and garden: Volunteers collect food left in the fields after harvest or help tend the food bank or food pantry's community garden.</li>
                        <li>Volunteer from home: Some food banks have moved their volunteer shifts online and are asking volunteers to help fundraise or spread awareness.</li>
                    </ul>
                </section>

                <img src="https://therapidian.org/sites/default/files/article_images/freshfoodgiveaway.jpg" alt="Fresh Produce" className="volunteerImg" />
            </section>

            {events.map((event) => {
                return (
                    <>
                        <section className="volunteering">
                            <section className="volunteerOpHeading">
                                <h2>{event.event_header}</h2>
                                <h3>{event.event_name}</h3>
                                <img src={event.image} alt={event.alt} />
                                <p>{event.location}</p>
                                <p>{event.organizer}</p>
                                <p>{event.dates}</p>
                                <p>{event.total_needed}</p>
                                <button
                                key={event.eventID}
                                onClick={() => handleClick(event.eventID, localStorage.getItem('volunteerID'))}
                                disabled={buttonStates[event.eventID] ? true : false}
                                >
                                Volunteer
                                </button>
                            </section>
                            <section className="volunteerOpData">
                                <h5 className="event">{event.description_header}</h5>
                                <p className="eventdesc">{event.event_description}</p>
                            </section>
                        </section>
                    </>
                )
            })}

            <section className="foodDriveContainer">
                <section className="foodDriveHeader">
                    <h2 id="foodDrive" className="foodDriveHeading">Food Drive</h2>
                </section>
            </section>

            <section className="foodDriveContent">
                <h2 className="foodDriveVer">Traditional vs. Virtual Food Drive</h2>

                <p>A traditional food drive is when you visit a grocery store and purchase non-perishable food items to deliver to a Food Bank. A virtual food drive is a fast, online way to make the same impact without leaving home or the office.</p>

                <p>A virtual food drive allows you to collect online donations rather than food. The dollars you collect from your virtual food drive become meals and other services for people facing hunger. These fundraisers allow you to have a greater impact in the fight against hunger. Many food banks prefer virtual food drives over traditional food drives. The cash donations from virtual food drives help food banks purchase food and make investments in their programs. Cash donations help our network stay strong during rising prices and supply chain issues.</p>

                <p>Your fundraiser will help to provide meals for families in your community struggling with food security. Join us in ensuring that everyone has access to healthy, nutritious food that nourishes families, children, seniors, and individuals.</p>
            </section>

            <section className="informFoodDrive">
                <h2>More About Food Drives:</h2>
                <p>Food drives help food charities keep their shelves stocked. They also help raise awareness about hunger in your community and encourage others to help. Here's how to get started:</p>
                <ul>
                    <li>Contact your local food bank</li>
                    <li>Decide your food drive format and location</li>
                    <li>Promote your food drive</li>
                    <li>Collect and deliver your food donations</li>
                    <li>Thank your friends and donors</li>
                </ul>
            </section>
     </>
    );
 }