import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import lessons from '../data/lessonsData'; // Importeer het lesobject

const Roadmap = () => {
    const navigate = useNavigate();

    const handleLessonClick = (lessonIndex) => {
        navigate(`/lesson/${lessonIndex}`);
    };

    return (
        <div className="container">
            <div className="top-bg">
                <Typography variant="h4" component="h1" className="page-top-text">
                    Draaiboek
                </Typography>
            </div>
            <div className="lessons-list" style={{ width: "85%" }}>
                <List>
                    {lessons.map((lesson, index) => (
                        <ListItem
                            key={index}
                            button
                            onClick={() => handleLessonClick(index)}
                            className="lesson-item"
                        >
                            <div className={index % 2 === 0 ? "lesson-content" : "lesson-content-outlined"}>
                                <ListItemText
                                    className={index % 2 === 0 ? "list-text" : "list-text-outlined"}
                                    primary={lesson.title}
                                    secondary={lesson.description}
                                />
                                <img src={lesson.imageUrl} alt={lesson.title} className="lesson-image" />
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default Roadmap;



