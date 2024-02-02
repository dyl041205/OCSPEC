
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useState, FormEvent } from 'react';

function Login() {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, postMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    postMessage("");
 
 
      try{
      const Reply = await axios.post("http://127.0.0.1:5000/Login", {
      email: Email,
      password: password,
     
    });
      postMessage(JSON.stringify(Reply.data));
      }catch (error) {
          if(axios.isAxiosError(error)) {
              postMessage(error.message);
          } else {
              postMessage(String(error));
          }
      }
  };



  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Bean And Brew</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={handleSubmit}>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="/signup" className="link-info">Register here</a></p>

          </div>
          {message && <p>Response: {message}</p>}

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://images.squarespace-cdn.com/content/v1/5643b2f6e4b021eb442bf41a/52c6b2d9-a4b1-4d6b-8d99-471b350400a7/new+shop+counter.JPG"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;