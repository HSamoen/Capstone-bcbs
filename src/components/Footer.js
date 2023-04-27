import React from 'react';
import {NavLink} from 'react-router-dom'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/BCBSAssociation/' className='me-4 text-reset' target="_blank">
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com/BCBSAssociation?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' className='me-4 text-reset' target="_blank">
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset' target="_blank">
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/bcbsassociation/?hl=en' className='me-4 text-reset' target="_blank">
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/in/hsamoen-eban/' className='me-4 text-reset'target="_blank">
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/' className='me-4 text-reset'target="_blank">
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src="https://www.linkpicture.com/q/wellnessPlus-logo2.png" style={{width:"15%"}} alt="logo"/>
               WellnessPlus
              </h6>
              <p>
              We support regional food banks in order to better serve all Americans in need of food assistance, by providing locals with options for both food donations and volunteer work to assist their neighbors in need.
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
              <NavLink style={{color:"gray"}} to="/">Home</NavLink>
              </p>
              <p>
              <NavLink style={{color:"gray"}} to="/takeaction">Take Action</NavLink>
              </p>
              <p>
              <NavLink style={{color:"gray"}} to="/loginregister">Login/Register</NavLink>
              </p>
              <p>
              <NavLink style={{color:"gray"}} to="/donate">Donate</NavLink>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Charlotte, NC 28200, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                wellnessPlus@email.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: @WellnessPlus
      </div>
    </MDBFooter>
  );
}