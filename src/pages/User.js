import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import '../styles/user.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBCardTitle } from 'mdb-react-ui-kit';

export default function User() {
    const { volunteerID } = useParams();
    const [volunteer, setVolunteer] = useState([]);
    const [volunteerEvents, setVolunteerEvents] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(true);

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

                const logout = () => {
                    localStorage.removeItem('volunteerID');
                    // localStorage.clear();
                    setLoggedIn(false);
                    window.location.href = '/loginregister';
                };


      return (
        <>
            {isLoggedIn ? (
                
                
                <>
                    <div style={{padding:"0px 50px"}}>
                    <div>
                        <MDBContainer className="container py-5 h-100">
                            <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol md="12" xl="4">
                                <MDBCard style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="text-center">
                                    <h1>Welcome!</h1>
                                    <MDBTypography tag="h4">{volunteer.full_name}</MDBTypography>
                                    <MDBCardText className="text-muted mb-4">
                                    username<span className="mx-2">|</span> <a href="#!">{volunteer.username}</a> <br></br>
                                    email<span className="mx-2">|</span> <a href="#!">{volunteer.email}</a>
                                    </MDBCardText>
                                    
                                    <MDBBtn rounded size="lg" onClick={logout}>
                                    Logout
                                    </MDBBtn >
                                
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>


                        {volunteerEvents.map((volunteerEvent) => 
                        {return (
                            <>
                                 
   
                <div className='card-container'>
                <MDBCard mx-auto style={{ maxWidth: '840px' }}>
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol md='4'>
                        <MDBCardImage className="event-img" src={volunteerEvent.image} alt={volunteerEvent.alt} fluid />
                        <MDBCardTitle className='event-headers'>
                            <p>{volunteerEvent.event_header}</p>
                            <h3>{volunteerEvent.event_name}</h3>
                            </MDBCardTitle>
                        </MDBCol>
                        <MDBCol md='8'>
                        <MDBCardBody>
                            
                            <MDBCardText className='event-des'>
                            <h5 className="event">{volunteerEvent.description_header}</h5>
                            <p className="eventdesc">{volunteerEvent.event_description}</p>
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>
                                <div className='event-info'>
                                    <p>{volunteerEvent.location}</p>
                                    <p>{volunteerEvent.organizer}</p>
                                    <p>Date: {volunteerEvent.dates}</p>
                                    <p>Volunteers: {volunteerEvent.total_needed}</p>
                                </div>
                                </small>
                            </MDBCardText> 
                         
                        </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                    </MDBCard>
                </div>
                            </>
                        )}
                        )}
                    </div>
                </>
            ) : (
                window.location.href = '/loginregister'
                )}
        </>
    )   
}
