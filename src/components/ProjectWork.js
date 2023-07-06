import React from 'react'
import './ProjectWork.css'
import P1 from '../image/project_img/tesla.png'
import P2 from '../image/project_img/corona2.jpg'
import P3 from '../image/project_img/kpr.jpg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ProjectWork = () => {
  return (
    <div className='projectContianer'>
        <div className='projectHead'>
            <h1>PROJECTS</h1>
        </div>
        <div className='work'>

            <div className='workCards'>
                <img src={P1} className="p1img" alt=''/>
                <button className='workButton'>
                    <span className='button_icon'>
                        <ArrowForwardIosIcon />
                    </span>
                    <span className='button_text'>
                        <a href="/#">View Me</a>
                    </span>
                </button>
            </div>
            <div className='workCards'>
                <img src={P2} className="p2img"  alt='' />
                <button className='workButton'>
                    <span className='button_icon'>
                        <ArrowForwardIosIcon />
                    </span>
                    <span className='button_text'>
                        <a href="/#">View Me</a>
                    </span>
                </button>
            </div>
            <div className='workCards'>
                <img src={P3} className="p3img"  alt='' />
                <button className='workButton'>
                    <span className='button_icon'>
                        <ArrowForwardIosIcon />
                    </span>
                    <span className='button_text'>
                        <a href="/#">View Me</a>
                    </span>
                </button>
            </div>
            
        </div> 

    </div>
  )
}

export default ProjectWork