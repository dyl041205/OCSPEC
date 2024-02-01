import React, { FormEvent, useState } from 'react';
import "./SignUp.css"

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from 'axios';

function Signup() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();
  

    
        try {
          const response = await axios.post("http://127.0.0.1:5000/SignUp", {
            Name: Name,
            password: password,
            Email: Email,
          });
      
        } catch (error) {
        }
      };
    

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://cafe77.co.uk/wp-content/uploads/2023/05/CAFE_77-min-scaled.jpg)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'   onChange={(e) => setName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'   onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'   onChange={(e) => setPassword(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' onChange={(e) => setRepeatPassword(e.target.value)}/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleRegister}>Sign Up</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;

function setResponseText(arg0: string) {
    throw new Error('Function not implemented.');
}
