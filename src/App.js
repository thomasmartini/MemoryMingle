import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Roadmap from './pages/Roadmap';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import Tutorials from './pages/Tutorials';
import BottomNavbar from './BottomNavbar';

const App = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <Router>
            <div style={{ paddingBottom: showNavbar ? '56px' : '0' }}>
                <Routes>
                    <Route path="/" element={<Welcome onStart={() => setShowNavbar(true)} />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                </Routes>
                {showNavbar && <BottomNavbar />}
            </div>
        </Router>
    );
};

export default App;



// Welcome -> Draaiboek
// Profiel, Voortgang, Tutorials
// Bottom Navbar
