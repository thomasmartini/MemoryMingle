import React from 'react';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';


const Home = () => {
    // Selecteer een oefening van de week (bijvoorbeeld de eerste oefening van de eerste les)
    const exerciseOfTheWeek = {
        title: "Pilates",
        duration: "20 min",
        difficulty: "Gemiddeld",
        image: "https://placehold.co/350x140",
        description: "Deze pilates les wordt gegeven door een oud pilates kampioen."
    };
    const activityOfTheWeek = {
        title: "Salsa Dansen",
        description: "Een leuke en energieke activiteit die helpt om in beweging te blijven en plezier te hebben."
    };
    const tipOfTheDay = {
        title: "Tip van de Dag",
        description: "Hoe meer kleuren groente en fruit je eet, hoe meer voedingsstoffen je binnenkrijgt. Dit idee staat ook bekend als het regenboogdieet."
    };
    const photoOfTheDay = {
        title: "Foto van de Dag",
        date:"16 Maart 2024",
        location:"Schiedam",
        image: "https://placehold.co/100x100"
    };

    const renderHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ?
                <span key={index} style={{color: "var(--primary-color)"}}>{part}</span> :
                part
        );
    };

    return (
        <div className="home-container" style={{padding: "20px"}}>
            <img src="/images/maria.png" alt="Profile Picture" width="25%"/>
            <Typography variant="h4" component="h1" className="home-title">
                Hoi Maria, wat wil je vandaag doen?
            </Typography>

            <Card className="home-card" style={{backgroundImage: `url(${exerciseOfTheWeek.image})`}}>
                <div className="card-overlay">
                    <Typography variant="h5" component="div" className="card-title">
                        Oefening van de Week | {exerciseOfTheWeek.title}
                    </Typography>
                    <Typography variant="body2" className="card-info">
                        {exerciseOfTheWeek.description}
                    </Typography>
                    <div style={{display: "flex", justifyContent: "space-between", marginRight: "20px"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <AccessTimeOutlinedIcon style={{fontSize: "15px"}}/>
                            <Typography variant="body2" className="card-info">
                                Duur: {exerciseOfTheWeek.duration}
                            </Typography>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <LocalFireDepartmentOutlinedIcon style={{fontSize: "15px"}}/>
                            <Typography variant="body2" className="card-info">
                                {exerciseOfTheWeek.difficulty}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className="home-card" style={{backgroundImage: `url(${exerciseOfTheWeek.image})`}}>
                <div className="card-overlay">
                    <Typography variant="h5" component="div" className="card-title">
                        Activiteit van de Week
                    </Typography>
                    <Typography variant="body2" className="card-info">
                        {activityOfTheWeek.description}
                    </Typography>
                </div>
            </Card>

            <Card className="home-card-tip">
                <div style={{padding: "10px"}}>
                    <Typography variant="h5" component="div" className="card-title">
                        {tipOfTheDay.title}
                    </Typography>
                    <Typography variant="body2" className="card-info">
                        <Typography variant="body2" className="card-info">
                            {renderHighlightedText(tipOfTheDay.description, "kleuren")}
                        </Typography>
                    </Typography>
                </div>
            </Card>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Card className="home-card-photo" style={{backgroundImage: `url(${photoOfTheDay.image})`}}>
                    <div className="card-overlay">
                        <Typography variant="h5" component="div" className="card-title">
                            {photoOfTheDay.title}
                        </Typography>
                        <Typography variant="h5" component="div" className="card-title-small">
                            {photoOfTheDay.date}
                        </Typography>
                        <Typography  variant="h5" component="div" className="card-title-small">
                            {photoOfTheDay.location}
                        </Typography>
                    </div>
                </Card>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Card className="home-card-progress">
                        <CardContent>
                            <div className="progress-item">
                                <DirectionsWalkIcon style={{color: "var(--primary-color)"}}/>
                                <div className="progress-text">
                                    <Typography variant="h6"
                                                style={{fontSize: "19px", fontWeight: "600"}}>2000</Typography>
                                    <Typography variant="body2" style={{fontSize: "10px"}}>stappen</Typography>
                                </div>
                            </div>
                            <div className="progress-item">
                                <WaterDropIcon style={{color: "var(--primary-color)"}}/>
                                <div className="progress-text">
                                    <Typography variant="h6"
                                                style={{fontSize: "19px", fontWeight: "600"}}>190</Typography>
                                    <Typography variant="body2" style={{fontSize: "10px"}}>Kcal</Typography>
                                </div>
                            </div>
                            <div className="progress-item">
                                <LocalFireDepartmentOutlinedIcon style={{color: "var(--primary-color)"}}/>
                                <div className="progress-text">
                                    <Typography variant="h6"
                                                style={{fontSize: "19px", fontWeight: "600"}}>1,8</Typography>
                                    <Typography variant="body2" style={{fontSize: "10px"}}>Liter</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="home-card-message" style={{backgroundImage: `url(${photoOfTheDay.image})`}}>
                        <Typography variant="h5" component="div" className="card-title" style={{padding: "9px"}}>
                            Lekker bezig Maria! We zijn trots op je!
                        </Typography>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;
