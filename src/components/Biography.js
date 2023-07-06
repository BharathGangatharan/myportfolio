import React from 'react';
import Pic from '../image/left_view.jpg';
import './Biography.css'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const Biography = () => {
  return (
    <div className='bio_Container'>
        <div className='my_bio'>
            <div className='my_bio_h'>
                <h1>A Few Words About Me</h1><EmojiEmotionsIcon style={{ color: "yellow" }}/>
            </div>
            <p className='my_bio_p'>
                Twenty two years ago, on <span className='about_p_dark'>August 23rd,1999</span> I was born in a 
                small town Pollachi,Coimbatore located in TamilNadu, India. I've always wanted to be a <span className='about_p_dark'>Front-End Developer.</span>
                So, I followed my interest in Academics as well as skills hoping I can live my Dream Life one day.  
            </p>
            <p className='my_bio_p'>
                Now, I am a Professional UI Developer involved in variety of work such as <span className='about_p_dark'>Web Development,
                Web Design,Server Mangement</span>. In my spare time I love to design <span className='about_p_dark'>UI Designs</span> using Figma, playing
                volley ball, Android games and solving Rubick's Puzzle. 
            </p>
            <p className='my_bio_p'>
                I have a huge obession about my self growth for better carrier and for my own good.
            </p>

            <h2>
                <i>DREAM IT, WISH IT, DO IT</i>
            </h2>

        </div>
        <div className='my_bio_pic'>
            <img src={Pic} alt="" />
        </div>
    </div>
  )};

export default Biography;
