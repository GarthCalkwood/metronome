import React from 'react';
import LoginForm from './LoginForm';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ( {onMenuClick, loginFormOpen, onLoginFormOpen, onLoginFormClose, } ) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick = {onMenuClick}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Metronome
          </Typography>
          <LoginForm
            isOpen={loginFormOpen} 
            onOpen={onLoginFormOpen}
            onClose={onLoginFormClose}
          />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar