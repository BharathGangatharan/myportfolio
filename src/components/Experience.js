import React from 'react';
import CTS from '../image/cts.png'
import './Experience.css'

const Experience = () => {
  return (

      <div className='exp'>
            <h2>EXPERIENCE</h2>
          <div className='exp_cont'>
            <div className='exp_img'>
                <img src={CTS} alt="" />
            </div>
            <div className='exp_p'>
                I am currently working with <span>Cognizant Technology solutions</span> as a <span>UI Developer</span>. I have joined
                this beautiful company with very supportive & co-operative team members in August 2021. This company has given
                me a great apportunity to learn and work on <span>React Js</span> considering I have some good experience with <span>Javascript</span>.
                Another thing I have got from this company is able to directly communicate with Clients and work according to
                their requirements and priorities.
            </div>
        </div>
    </div>

  )}

export default Experience;
