import React from 'react';
import './ProgressBar.css'


const ProgressBar = () => {

  function showProgress(){
    var bar = document.querySelectorAll('.skill-bar');
    bar = Array.from(bar)
    bar.forEach((b)=>{
      //const value= b.dataset.progress;
      b.style.animation = "fillBars 2s 1";
    })
  }
  // function hideProgress(){
  //   // var bar = document.querySelectorAll('.skill-bar');
  //   // bar.forEach(b=>{
  //   //   b.style.opacity = 0;
  //   //   b.style.width = 0;
  //   // })
  // }

  window.addEventListener('scroll',()=>{
    const skill = document.getElementsByClassName('progress_main_container')[0];
    const sectionPos = skill.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos){
      showProgress();
    }
  })
  return (
    <div className='progress_main_container'>
      <div className='fd'>
        <h1>SKILLS</h1>
      </div>
      <div className='f'>
        <div className='progress_main_container_1'>
          <div className='skill'>
            <div className='skill-name'>
              Html
            </div>
            <div className='skill-bar' data-progress="90">
              <div className='skill-per' per="90%" style={{"max-width":420}}></div>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-name'>
              Css
            </div>
            <div className='skill-bar' data-progress="85">
              <div className='skill-per' per="85%" style={{"max-width":350}}></div>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-name'>
              Javascript
            </div>
            <div className='skill-bar' data-progress="80">
              <div className='skill-per' per="80%" style={{"max-width":300}}></div>
            </div>
          </div>
        </div>
        <div className='progress_main_container_2'>
          <div className='skill'>
              <div className='skill-name'>
                Jquery
              </div>
              <div className='skill-bar' data-progress="80">
                <div className='skill-per' per="80%" style={{"max-width":300}}></div>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-name'>
                React js
              </div>
              <div className='skill-bar' data-progress="85">
                <div className='skill-per' per="85%" style={{"max-width":370}}></div>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-name'>
                Bootstrap
              </div>
              <div className='skill-bar' data-progress="83">
                <div className='skill-per' per="83%" style={{"max-width":340}}></div>
              </div>
            </div>
        </div>
      </div>
    </div> 

)};

export default ProgressBar;
