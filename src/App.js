import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Lesson from './pages/Lesson';
import StartSession from './components/StartSession';
import Exercise from './components/Exercise';
import Complete from './pages/Complete';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import Tutorials from './pages/Tutorials';
import BottomNavbar from './BottomNavbar';
import './App.css';

const App = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <Router>
            <div style={{paddingBottom: showNavbar ? '56px' : '0'}}>
                <Routes>
                    <Route path="/" element={<Welcome onStart={() => setShowNavbar(true)}/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/roadmap" element={<Roadmap/>}/>
                    <Route path="/lesson/:lessonId" element={<Lesson/>}/>
                    <Route path="/lesson/:lessonId/start/:exerciseIndex" element={<StartSession/>}/>
                    <Route path="/lesson/:lessonId/exercise/:exerciseIndex" element={<Exercise/>}/>
                    <Route path="/complete/:lessonId" element={<Complete/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/progress" element={<Progress/>}/>
                    <Route path="/tutorials" element={<Tutorials/>}/>
                </Routes>
                {showNavbar && <BottomNavbar/>}
            </div>
        </Router>
    );
};

export default App;
