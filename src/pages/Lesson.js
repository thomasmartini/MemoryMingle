import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, IconButton } from '@mui/material';
import { Button } from 'antd';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import lessons from '../data/exerciseData.json';

const Lesson = () => {
    const { lessonId } = useParams();
    const lesson = lessons.lessons[lessonId];
    const navigate = useNavigate();

    return (
        <div className="lesson-container">
            <div className="lesson-header" style={{ backgroundImage: 'url(https://placehold.co/600x400)' }}>
                <IconButton
                    className="back-button"
                    aria-label="terug naar roadmap"
                    onClick={() => navigate('/roadmap')}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Button className="start-session-button" onClick={() => navigate(`/lesson/${lessonId}/start/0`)}>
                    <PlayArrowOutlinedIcon />
                    Start Sessie
                </Button>
            </div>
            <div className="lesson-content">
                <Typography variant="h4" component="h1" className="lesson-title">
                    {lesson.title}
                </Typography>
                <div style={{ display: "flex", margin: "20px 0" }}>
                    <Button style={{ pointerEvents: 'none', marginRight: '10px' }} className="session-info-button">
                        <AccessTimeOutlinedIcon />
                        {lesson.duration}
                    </Button>
                    <Button style={{ pointerEvents: 'none' }} className="session-info-button">
                        <LocalFireDepartmentOutlinedIcon />
                        {lesson.difficulty}
                    </Button>
                </div>
                <Typography variant="body1" className="lesson-description">
                    {lesson.description}
                </Typography>
                <Typography variant="h5" component="h2" className="exercises-title">
                    Oefeningen
                </Typography>
                <div className="exercises-list">
                    {lesson.exercises.map((exercise, index) => (
                        <div key={index} className="exercise-item">
                            <img src="https://placehold.co/100x100" alt="exercise" className="exercise-image" />
                            <div className="exercise-details">
                                <Typography variant="h6" component="h3" className="exercise-title">
                                    {exercise.title}
                                </Typography>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <AccessTimeOutlinedIcon style={{ marginRight: "5px", color: "#F96900", fontSize: "18px" }} />
                                    <Typography variant="body2" className="exercise-duration">
                                        {exercise.duration}
                                    </Typography>
                                </div>
                                <Typography variant="body2" className="exercise-description">
                                    {exercise.description}
                                </Typography>
                                <Typography variant="body2" className="exercise-link">
                                    Ga naar oefening >
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lesson;


