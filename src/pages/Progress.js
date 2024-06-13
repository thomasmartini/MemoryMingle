import React from 'react';
import { Typography, } from '@mui/material';

const Progress = () => {
    const progressing = [
        { title: 'Les 1', completed: 200, progressed: '100%'},
        { title: 'Les 2', completed: 152, progressed: '75%' },
        { title: 'Les 3', completed: 100, progressed: '50%'},
    ];
    const days = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'
    ]
    return (
        <div className="container">
           <div className="top-bg">
                <Typography variant="h4" component="h1" className="page-top-text">
                    Progress
                </Typography>
            </div>
            <div className="sections-list">
              
                    <div className='section-content-outlined'>
                        
                        <div className='section-text-outlined'>
                            <Typography variant="h5" component="h2">
                                Laatste activiteiten
                            </Typography>
                            
                            {progressing.map((progress) => (
                             
                            <Typography variant="body1" component="p">
                                <div className='progress-display'>
                                <img src= '/images/flag.png' alt='flag' className="progress-image"/>
                                {progress.title}
                            <div className="progress-bar" style={{width: progress.completed}}></div>
                            {progress.progressed}
                            </div>
                            </Typography>
                            ))}
                            </div>
                            
                        </div>
                        <div className='progress-content'>
                            <div className='progress-content-outlined'><div>Dag</div><div className='progress-day-active'>Week</div><div>Maand</div><div>Jaar</div></div>
                            <div className='progress-section-content'>
                                {days.map((day) => (   
                                    <div>
                                        <div className='progress-bar-day'></div>
                                    {day}
                                </div>))}
                             
                            </div>
                    </div>
            </div>
        </div>
    );
};

export default Progress;

// 75791641