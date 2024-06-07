import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome = ({ onStart }) => {
    const navigate = useNavigate();

    const handleStart = () => {
        onStart();
        navigate('/roadmap');
    };

    return (
        <Container style={{ marginTop: '20px', textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to MemoryMingle
            </Typography>
            <Button variant="contained" color="primary" onClick={handleStart}>
                Start
            </Button>
        </Container>
    );
};

export default Welcome;


