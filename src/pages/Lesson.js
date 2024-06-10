import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, IconButton } from '@mui/material';
import { Button } from 'antd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import lessons from '../data/lessonsData';

const Lesson = () => {
    const { lessonId } = useParams();
    const lesson = lessons[lessonId];
    const exerciseKeys = Object.keys(lesson.exercises);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const navigate = useNavigate();

    const nextExercise = () => {
        if (exerciseIndex < exerciseKeys.length - 1) {
            setExerciseIndex(exerciseIndex + 1);
        } else {
            navigate(`/complete/${lessonId}`);
        }
    };

    const prevExercise = () => {
        if (exerciseIndex > 0) {
            setExerciseIndex(exerciseIndex - 1);
        }
    };

    const currentExerciseKey = exerciseKeys[exerciseIndex];
    const currentExercise = lesson.exercises[currentExerciseKey];

    return (
        <div className="container">
            <div className="top-bg">
                <IconButton
                    style={{ float: "left", color: "white", fontSize: "x-large", padding: "10px", position: "absolute" }}
                    color="primary"
                    aria-label="terug naar roadmap"
                    onClick={() => navigate('/roadmap')}
                    className="back-button"
                >
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" component="h1" className="page-top-text">
                    Draaiboek
                </Typography>
            </div>
            <div className="exercise-text">
                <Typography variant="h4" component="h1" className="lesson-title">
                    {lesson.title} | {currentExercise.title}
                </Typography>
                <Typography style={{ fontSize: "medium" }} variant="h6" component="h3" className="exercise-description">
                    {currentExercise.description}
                </Typography>
            </div>
            {currentExercise.url && (
                <video key={currentExercise.url} className="vid" height="auto" controls>
                    <source src={currentExercise.url} type="video/mp4" />
                    Your device does not support the video tag.
                </video>
            )}
            <div className="picture-div">
                <div>
                    <Typography style={{ fontSize: "20px" }} variant="h4" component="h3" className="lesson-title">
                        Foto??
                    </Typography>
                    <Typography style={{ fontSize: "15px" }} variant="h6" component="h3" className="exercise-description">
                        Leg je workout vast met een leuke foto...
                    </Typography>
                </div>
                <div>
                    <img src="/images/camera.png" alt="Picture Icon" className="lesson-image" />
                </div>
            </div>
            <div className="navigation-buttons">
                <Button variant="contained" color="primary" onClick={prevExercise} disabled={exerciseIndex === 0}>
                    Vorige
                </Button>
                <Button variant="contained" color="primary" onClick={nextExercise}>
                    Volgende
                </Button>
            </div>
        </div>
    );
};

export default Lesson;
