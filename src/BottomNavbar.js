import React from 'react';
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import {useNavigate} from 'react-router-dom';

const BottomNavbar = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/home');
                break;
            case 1:
                navigate('/roadmap');
                break;
            case 2:
                navigate('/roadmap');
                break;
            case 3:
                navigate('/progress');
                break;
            case 4:
                navigate('/profile');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            style={{position: 'fixed', bottom: 0, width: '100%'}}
        >
            <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon/>}/>
            <BottomNavigationAction label="Roadmap" icon={<PhotoAlbumOutlinedIcon/>}/>
            <BottomNavigationAction label="Progress" icon={<GroupsOutlinedIcon/>}/>
            <BottomNavigationAction label="Profile" icon={<EmojiEventsOutlinedIcon/>}/>
            <BottomNavigationAction label="Tutorials" icon={<PermIdentityOutlinedIcon/>}/>
        </BottomNavigation>
    );
};

export default BottomNavbar;



