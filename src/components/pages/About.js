import React from 'react';
import AboutBelow from '../AboutBelow';
import AboutInfo from '../AboutInfo';
import Biography from '../Biography';
import Experience from '../Experience';
import FooterNew from '../FooterNew';
import Languages from '../Languages';
import LineChart from '../LineChart';
import Navbar from '../Navbar'

const About = () => {
  return (
  <React.Fragment>
      <Navbar />
      <AboutBelow/>
      <AboutInfo/>
      <Biography/>
      <Languages/>
      <LineChart/>
      <Experience/>
      <FooterNew/>
  </React.Fragment>
  )};

export default About;
