import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Button} from 'antd'
import lessons from '../data/lessonsData';

const Complete = () => {
    const { lessonId } = useParams();
    const lesson = lessons[lessonId];
    const navigate = useNavigate();

    const handleBackToRoadmap = () => {
        navigate('/roadmap');
    };

    return (
        <Container className="complete-container">
            <CheckCircleIcon style={{ fontSize: '100px', color: 'green' }} />
            <Typography variant="h4" component="h1" className="complete-text">
                Goed gedaan! Je hebt {lesson.title} afgerond.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleBackToRoadmap}
                style={{ marginTop: '20px' }}
            >
                Terug naar Roadmap
            </Button>
        </Container>
    );
};

export default Complete;
