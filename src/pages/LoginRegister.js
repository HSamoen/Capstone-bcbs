import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from 'axios';

function App() {
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [volunteer_password, setVolunteerPassword] = useState("");

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const volunteer = { full_name, username, email, volunteer_password };
    insertVolunteer(volunteer)
      .then((response) => {
        console.log('resp', response);
        alert('Volunteer registered successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while registering volunteer.');
      });
  };

  const insertVolunteer = async (volunteer) => {
      try {
        const response = await axios.post("http://localhost:3001/insert", volunteer)
        return response;
      } catch(err) {
        console.log(err)
      }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <a href='https://www.facebook.com/BCBSAssociation/' className='me-4 text-reset' target="_blank">
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>
              </a>

              <a href='https://twitter.com/BCBSAssociation?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' className='me-4 text-reset' target="_blank">
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>
              </a>

              <a href='https://www.google.com/' className='me-4 text-reset' target="_blank">
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>
              </a>

              <a href='https://github.com/' className='me-4 text-reset'target="_blank">
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
              </a>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <a href='https://www.facebook.com/BCBSAssociation/' className='me-4 text-reset' target="_blank">
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>
              </a>

              <a href='https://twitter.com/BCBSAssociation?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' className='me-4 text-reset' target="_blank">
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>
              </a>

              <a href='https://www.google.com/' className='me-4 text-reset' target="_blank">
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>
              </a>

              <a href='https://github.com/' className='me-4 text-reset'target="_blank">
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
              </a>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <form onSubmit={handleRegisterSubmit}>
              <MDBInput wrapperClass='mb-4' label='Name' id='name' name="full_name" type='text' value={full_name} onChange={e => setFullName(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Username' id='username'name="username" type='text'onChange={e => setUsername(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Email' id='email' name="email" type='email' onChange={e => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' id='password' name="volunteer_password" type='password' onChange={e => setVolunteerPassword(e.target.value)} />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" type='submit'>Sign up</MDBBtn>

        </form>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default App;