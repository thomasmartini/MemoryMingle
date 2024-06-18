import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const StartSession = () => {
    const navigate = useNavigate();
    const { lessonId, exerciseIndex } = useParams();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(`/lesson/${lessonId}/exercise/${exerciseIndex}`);
        }, 2000); // 2 seconden wachten

        return () => clearTimeout(timer);
    }, [navigate, lessonId, exerciseIndex]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant="h3">KLAAR...</Typography>
        </div>
    );
};

export default StartSession;
