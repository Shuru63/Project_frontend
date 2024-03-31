import React from 'react'
import './auth.css';
import { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import {
  CModal,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CButton,
} from '@coreui/react';
import { Link } from 'react-router-dom';
const Auth = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [phone, setphone] = useState();
  const [password, setpassword] = useState();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('green');
  const handleErrorChange = (e) => {
    setVisible(true);
    setMessage(e);
    setMessageColor('red');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Input validation
    if (!phone.trim() || !password.trim()) {
      handleErrorChange('Mobile number and password are required.');
      return;
    }
    if (!/^\d{10}$/.test(phone.trim())) {
      handleErrorChange('Please enter a valid 10-digit mobile number.');
      return;
    }
    // If all validations pass, you can proceed with login
    console.log('Login successful');
  };
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <div>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Alert</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ color: messageColor }}>{message}</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>

      <div className='container-auth'>
        <div className='log-in-card'>
          <div className='from-google'>
            Shuru Fitness
          </div>
          <div className='cover'>
          
          <div className='log-in-form'>

            <form className='form' action="/" method="post" onSubmit={handleSubmit}>
              <div className="form-input">
                <label htmlFor="phone">Mobile Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <input
                  type={passwordType}
                  name="password"
                  id="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="password-container ">
                <div className="input-pass">
                  <input
                    className="pass-in"
                    type="checkbox"
                    onClick={togglePassword}
                  />
                  <span className="show-pass">Show Password</span>
                </div>
                <div>
                  <small>
                    <a
                      className="forget"
                      href="/ForgotPassword"
                    >
                      Forgot Password?
                    </a>
                  </small>
                </div>
              </div>
              <div className="form-btn">
                <button type="submit">Login</button>
              </div>
              <div className='register'>
            <Link to='/register'>  <p>Register the new Account</p></Link>  
            <Link to='/'>  <p className='home'>Home</p></Link>  
              </div>
            </form>
          </div>
        </div>
      </div></div>
    </div>
  )
}

export default Auth
