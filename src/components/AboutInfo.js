import React from 'react';
import './AboutInfo.css';
import Picture from '../image/about_pic.jpg'

const MyInfo = () => {
  return (
      <div className='info_container'>
          <div className='self_image'>
              <img src={Picture}  alt=''/>
          </div>
          <div className='information'>
            <h1>Let Me Introduce Myself</h1>
            <p className='p1'>My name is <span className='dark'>BHARATH G</span> , I am an independent UI Developer from TamilNadu, India. 
                I am currently working as a <span className='dark'>UI Developer</span> at <span className='dark'>Cognizant Technology Solutions</span> located in Coimbatore, India. 
            </p>
            <p className='p2'>
              As per my Academic background , I have completed my Bachleour's in Engineering under the specialization <span className='dark'>
              Electronics and Communication Engineering</span> from KPR Institute of Engineering and Technology located in TamilNadu, India.
            </p>
          </div>
      </div>
  )};

export default MyInfo;
