import React from 'react'
import "./Intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import KK from '../image/snap_g_sofa.png'
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme)=>({
  abs:{
      "&:hover":{
          fontSize:"35px"
      }
  },
  root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
}))

const Intro = () => {
    const textRef = useRef();
    const classes = useStyles();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["UI Developer", "Designer","Programmer"],
      });
    }, []);

  return (
     <div className="intro" id="intro">
      <div className="left">
      <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Bharath G</h1>
          <h3 className='spanDynamic'>
            <span ref={textRef}></span>
          </h3>
          <div className={classes.root} id="buton_variant">
              <Button  variant="contained" className='resumeButton'>
                Resume
                </Button>
              <Button  variant="contained" color="secondary" className='wButton'>
                Work
              </Button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="imgContainern">
          <img src={KK} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Intro