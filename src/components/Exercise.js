import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Typography, Button, IconButton} from '@mui/material';
import lessons from '../data/exerciseData.json';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Exercise = () => {
    const { lessonId, exerciseIndex } = useParams();
    const lesson = lessons.lessons[lessonId];
    const exercise = lesson.exercises[exerciseIndex];
    const navigate = useNavigate();

    const nextExercise = () => {
        if (exerciseIndex < lesson.exercises.length - 1) {
            navigate(`/lesson/${lessonId}/exercise/${parseInt(exerciseIndex) + 1}`);
        } else {
            navigate(`/complete/${lessonId}`);
        }
    };

    const prevExercise = () => {
        if (exerciseIndex > 0) {
            navigate(`/lesson/${lessonId}/exercise/${parseInt(exerciseIndex) - 1}`);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <IconButton
                className="back-button"
                aria-label="terug naar roadmap"
                onClick={() => navigate('/lesson')}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <video src={exercise.video} controls style={{ width: '100%', height: '70%' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '20px' }}>
                <Button variant="contained" color="primary" onClick={prevExercise} disabled={exerciseIndex === 0}>
                    Vorige
                </Button>
                <div>
                    <Typography variant="body1">Sets: 3</Typography>
                    <Typography variant="body1">Reps: 10</Typography>
                </div>
                <Button variant="contained" color="primary" onClick={nextExercise} disabled={exerciseIndex >= lesson.exercises.length - 1}>
                    Volgende
                </Button>
            </div>
        </div>
    );
};

export default Exercise;
