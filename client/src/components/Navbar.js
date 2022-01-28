import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserDisplay from './UserDisplay';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


const Navbar = ( {onMenuClick, loginFormOpen, onLoginFormOpen, onLoginFormClose, handleLogin, onLoginUsernameChange, onLoginPasswordChange, onCheckboxChange, checked, errorMessage, user, handleLogout, signupFormOpen, onSignupFormOpen, onSignupFormClose, handleSignup, onSignupUsernameChange, onSignupPasswordChange, onSignupConfirmPasswordChange} ) => {
  
  const loginForm = () => (
    <LoginForm
      isOpen={loginFormOpen} 
      onClose={onLoginFormClose}
      onSignupFormOpen={onSignupFormOpen}
      handleLogin={handleLogin}
      onUsernameChange={onLoginUsernameChange}
      onPasswordChange={onLoginPasswordChange}
      onCheckboxChange={onCheckboxChange}
      checked={checked}
      errorMessage={errorMessage}
    />
  )

  const signupForm = () => (
    <SignupForm
      isOpen={signupFormOpen} 
      onClose={onSignupFormClose}
      onLoginFormOpen={onLoginFormOpen}
      handleSignup={handleSignup}
      onUsernameChange={onSignupUsernameChange}
      onPasswordChange={onSignupPasswordChange}
      onConfirmPasswordChange={onSignupConfirmPasswordChange}
      errorMessage={errorMessage}
    />
  ) 

  const loginButton = () => (
    <Button color="inherit" variant="outlined" onClick={onLoginFormOpen}>
      Login
    </Button>
  )

  const userDisplay = () => (
    <UserDisplay
      user={user}
      handleLogout={handleLogout}
    />
  )
  
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
          {user === null ?
            loginButton() :
            userDisplay()
          }
        </Toolbar>
      </AppBar>
      {loginForm()}
      {signupForm()}
    </Box>
  );
}

export default Navbar