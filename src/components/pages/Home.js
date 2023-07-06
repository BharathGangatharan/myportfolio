import React from 'react';
import Navbar from '../Navbar';
import MyInfo from '../MyInfo';
import ProgressBar from '../ProgressBar';
import ProjectWork from '../ProjectWork';
import Intro from '../Intro';
import FooterNew from '../FooterNew';


// import ParticleBackground from './Particles/ParticleBackground';

// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import EmailIcon from '@material-ui/icons/Email';


const Home = () => {
      
    return(
    
         <div>
            <Navbar />
            <Intro/>
            <MyInfo />
            <ProgressBar/>
            <ProjectWork/>
            <FooterNew/>
        </div>    
)};

export default Home;
