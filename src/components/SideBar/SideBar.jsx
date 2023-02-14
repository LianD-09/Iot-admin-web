import React from 'react';

import './sidebar.scss';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import Dashboard from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 20;

const features = [
    {
        text: 'Dashboard',
        endPoint: '',
        img: <Dashboard />
    },
    {
        text: 'Users',
        endPoint: 'users',
        img: <GroupIcon />
    },
    {
        text: 'Access history',
        endPoint: 'access',
        img: <HistoryIcon />
    },
    {
        text: 'Other',
        endPoint: '404',
        img: <DehazeIcon />
    }
];

const account = [
    {
        text: 'Profile',
        endPoint: 'profile',
        img: <PersonIcon />
    },
    {
        text: 'Sign out',
        endPoint: 'login',
        img: <LogoutIcon />
    }
];

export const SideBar = (props) => {
    const navigate = useNavigate();

    const handleClick = (endPoint) => {
        navigate(`/${endPoint}`);
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: `${drawerWidth}rem`,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: `${drawerWidth}rem`,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {features.map((it, index) => (
                        <ListItem key={it.text} disablePadding>
                            <ListItemButton onClick={() => handleClick(it.endPoint)}>
                                <ListItemIcon >
                                    {it.img}
                                </ListItemIcon>
                                <ListItemText primary={it.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {account.map((it, index) => (
                        <ListItem key={it.text} disablePadding>
                            <ListItemButton onClick={() => handleClick(it.endPoint)}>
                                <ListItemIcon>
                                    {it.img}
                                </ListItemIcon>
                                <ListItemText primary={it.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
