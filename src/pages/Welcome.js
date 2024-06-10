import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from "antd";

const Welcome = ({ onStart }) => {
    const navigate = useNavigate();

    const handleStart = () => {
        onStart();
        navigate('/roadmap');
    };

    return (
        <div style={{justifyContent:"space-between"}} className="container">
            <Typography variant="subtitle1" component="h2" className="top-text">
                Beweeg Coach App
            </Typography>
            <div className="middle-text">
                <Typography variant="h4" component="h1">
                    Welcome
                </Typography>
            </div>
            <Button type="primary" className="start-button" onClick={handleStart}>
                Start
            </Button>

            <div style={{width:"100%", top:"95.5%", position:"absolute"}}>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                     viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(249, 105, 0, 0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(249, 105, 0, 0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="10" fill="rgba(249, 105, 0, 0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="15" fill="#F96900" />
                    </g>
                </svg>
            </div>
        </div>

    );
};

export default Welcome;

