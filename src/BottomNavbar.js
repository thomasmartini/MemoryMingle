import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
            <BottomNavigationAction label="Roadmap" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Profile" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Progress" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Tutorials" icon={<FavoriteIcon />} />
        </BottomNavigation>
    );
};

export default BottomNavbar;



