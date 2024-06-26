import React, { useState } from 'react';
import backgroundImage from '../assets/img/banner/login.jpg'; // Import the image
import LoginRagistrationFrom from './LoginRagistrationFrom';

export default function LoginRegistrationTab() {

  return (
    <div>
      <div
        className='registration-login-main'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${backgroundImage})`, 
          height: '750px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 justify-content-center'>
             
                <div className=' col-lg-5 col-md-10 col-12 mx-auto'>
                  <LoginRagistrationFrom />
                </div>

            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
