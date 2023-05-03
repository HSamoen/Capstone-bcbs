import {NavLink} from 'react-router-dom';
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>

        <NavLink  to="/" >
          <img style={{width:"70%", paddingLeft:10}} src="https://www.linkpicture.com/q/wellnessPlus-logo1_1.png" alt="logo" />
        </NavLink>
        
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem style={{padding:15, fontSize:15}} > 
            <i style={{paddingRight:10}} className="fa fa-university"></i> 
             <NavLink to="/">Home</NavLink>
           
            </MDBNavbarItem>
            <MDBNavbarItem style={{padding:15, fontSize:15}}> 
            <i style={{paddingRight:10}} className="fa fa-heartbeat"></i>
             <NavLink to="/takeaction">Take Action</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem style={{padding:15, fontSize:15}}> 
            <i style={{paddingRight:10}} className="fa fa-user-circle"></i>
             <NavLink to="/loginregister">Login/Register</NavLink>
            </MDBNavbarItem>

           
            <MDBNavbarItem style={{padding:15, fontSize:15}}> 
            <i style={{paddingRight:10}} className="fa fa-calendar"></i>
             <NavLink to="/user">Dashboard</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem style={{marginTop:"8px" ,fontSize:15, marginLeft:"15px", marginRight:"15px"}}> 
             <NavLink to="/donate">
             <MDBBtn color='info'> Donate</MDBBtn>
             </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}