import React, { Component } from 'react';

import axios from 'axios';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      username: "",
      email: "", 
      volunteer_password: "",
      justifyActive: 'tab1',
      loggedIn: false,
<<<<<<< HEAD
      
=======
      volunteerID: null
>>>>>>> a02221a23d08e9d0912542fd6e62ae591b9d416d
    };
  }

  handleJustifyClick = (value) => {
    if (value === this.state.justifyActive) {
      return;
    }
    this.setState({ justifyActive: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, volunteer_password } = this.state;
    try {
      const response = await axios.post("http://localhost:3001/login", { email, password: volunteer_password });
      if (response.data.success) {
        console.log(response);
        alert('Logged in successfully!');
      this.setState({ loggedIn: true, volunteerID: response.data.volunteerID });
      localStorage.setItem('volunteerID', response.data.volunteerID)
      window.location.href = `/User/${response.data.volunteerID}`;
        
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error(error);
      alert('Error occurred while logging in.');
    }
  };


  handleRegisterSubmit = (event) => {
    event.preventDefault();
    const volunteer = { 
      full_name: this.state.full_name, 
      username: this.state.username, 
      email: this.state.email, 
      volunteer_password: this.state.volunteer_password
    };
    this.insertVolunteer(volunteer)
      .then((response) => {
        console.log('resp', response);
        alert('Volunteer registered successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while registering volunteer.');
      });
  };

  insertVolunteer = async (volunteer) => {
    try {
      const response = await axios.post("http://localhost:3001/insert", volunteer);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => this.handleJustifyClick('tab1')} active={this.state.justifyActive === 'tab1'}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => this.handleJustifyClick('tab2')} active={this.state.justifyActive === 'tab2'}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

          <MDBTabsPane show={this.state.justifyActive === 'tab1'}>

      <form onSubmit={this.handleSubmit}>
        <MDBInput 
        wrapperClass='mb-4' 
        label='Email address' 
        id='form1' type='email' 
        name="email" 
        value={this.state.email} 
        onChange={(e) => this.setState({ email: e.target.value })} />

        <MDBInput 
        wrapperClass='mb-4' 
        label='Password' 
        id='form2' 
        type='password' 
        name="volunteer_password" 
        value={this.state.volunteer_password} 
        onChange={(e) => this.setState({ volunteer_password: e.target.value })} /> 

        <div className="d-flex justify-content-between mx-4 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>
        <MDBBtn className="mb-4 w-100" type="submit">Sign in</MDBBtn>
        {/* {this.state.login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )} */}
        <p className="text-center">Not a member? <a href="#!">Register</a></p>
      </form>
          </MDBTabsPane>

        <MDBTabsPane show={this.state.justifyActive === 'tab2'}>


       <form onSubmit={this.handleRegisterSubmit}>
        <MDBInput
          wrapperClass='mb-4'
          label='Name'
          id='name'
          name="full_name"
          type='text'
          value={this.state.full_name}
          onChange={e => this.setState({ full_name: e.target.value })}
          required
          pattern="^[a-zA-Z]+ [a-zA-Z]+$"
          title="Please enter your full name"
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Username'
          id='username'
          name="username"
          type='text'
          onChange={e => this.setState({ username: e.target.value })}
          required
          
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Email'
          id='email'
          name="email"
          type='email'
          onChange={e => this.setState({ email: e.target.value })}
          required
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        />
        <MDBInput
          wrapperClass='mb-4'
          label='Password'
          id='password'
          name="volunteer_password"
          type='password'
          onChange={e => this.setState({ volunteer_password: e.target.value })}
          required
          minLength={6}
        />
        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='roles' id='roles' label='I have read and agree to the terms' required />
        </div>
        <MDBBtn className="mb-4 w-100" type='submit'>Sign up</MDBBtn>
      </form>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
 }
}