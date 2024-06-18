import React from 'react';
import {Typography, List, ListItem} from '@mui/material';
import {Button} from 'antd';
import {useNavigate} from 'react-router-dom';
import lessons from '../data/exerciseData.json';

const Roadmap = () => {
    const navigate = useNavigate();

    const handleLessonClick = (lessonIndex) => {
        navigate(`/lesson/${lessonIndex}`);
    };

    return (
        <div className="container">
            <div className="lessons-list">
                <List className="lessons-grid">
                    <Button className="lesson-button">Overzicht</Button>
                    <Button className="lesson-button">Afgerond</Button>
                    {lessons.lessons.map((lesson, index) => (
                        <ListItem
                            key={index}
                            button
                            onClick={() => handleLessonClick(index)}
                            className="lesson-item"
                        >
                            <div
                                className="lesson-content"
                                style={{backgroundImage: `url(${lesson.image})`}}
                            >
                                <div className="lesson-overlay">
                                    <Typography variant="h6" className="lesson-title">
                                        {lesson.title}
                                    </Typography>
                                    <div className="lesson-overlay-info">
                                        <div>
                                            <Typography variant="body2" className="lesson-info">
                                                {lesson.duration}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body2" className="lesson-info">
                                                {lesson.difficulty}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default Roadmap;




