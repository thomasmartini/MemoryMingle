import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';

const BottomNavbar = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/roadmap');
                break;
            case 1:
                navigate('/profile');
                break;
            case 2:
                navigate('/progress');
                break;
            case 3:
                navigate('/tutorials');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
            <BottomNavigationAction label="Roadmap" icon={<MapTwoToneIcon />} />
            <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="Progress" icon={<ShowChartTwoToneIcon />} />
            <BottomNavigationAction label="Tutorials" icon={<SchoolIcon />} />
        </BottomNavigation>
    );
};

export default BottomNavbar;



