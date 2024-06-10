import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Typography} from '@mui/material';

const sections = [
    { title: 'Tutorial', description: 'Uitleg', imageUrl: '/images/megaphone.png', path: '/tutorial' },
    { title: 'Draaiboek', description: 'Uitleg', imageUrl: '/images/calendar.png', path: '/roadmap' },
    { title: 'Voortgang', description: 'Uitleg', imageUrl: '/images/medal.png', path: '/progress' },
];

const Profile = () => {
    const navigate = useNavigate();

    const handleSectionClick = (path) => {
        navigate(path);
    };

    return (
        <div className="container">
            <div style={{paddingBottom:"50px"}} className="top-bg">
                <div className="profile-content">
                    <img src="/images/profile.png" alt="Profile" className="profile-pic"/>
                    <div className="profile-text">
                        <Typography variant="h4" component="h1" gutterBottom>
                            Profiel
                        </Typography>
                        <Typography variant="body2" component="p">
                            Ik ben Annie. Houd jij mijn tassie even vast?
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="sections-list">
                {sections.map((section, index) => (
                    <div key={index} className={index % 2 === 0 ? 'section-content' : 'section-content-outlined'}
                         onClick={() => handleSectionClick(section.path)}
                         style={{cursor: 'pointer'}}>
                        <div className={index % 2 === 0 ? 'section-text' : 'section-text-outlined'}>
                            <Typography variant="h5" component="h2">
                                {section.title}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {section.description}
                            </Typography>
                        </div>
                        <img src={section.imageUrl} alt={section.title} className="section-image"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
