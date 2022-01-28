import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from "@mui/material/Slide";
import Alert from '@mui/material/Alert'
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';


const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  paper: {
    width: "25%",
    minWidth: "300px"
  }
})

const SignupForm = ({isOpen, onClose, onLoginFormOpen, handleSignup, onUsernameChange, onPasswordChange, onConfirmPasswordChange, errorMessage}) => {
  const classes = useStyles()

  const errorMessageDisplay = () => (
    <Alert severity="error">{errorMessage}</Alert>
  )

  return (
    <Dialog classes={{paper: classes.paper}} open={isOpen} onClose={onClose} TransitionComponent={Transition}>
      <DialogTitle>
        <div>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography 
            variant="h5"
            align="center"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent>
        {errorMessage !== '' && errorMessageDisplay()}
        <form>
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            onChange={onUsernameChange}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={onPasswordChange}
          />
          <TextField
            margin="dense"
            id="confirmPassword"
            label="Confirm password"
            type="password"
            fullWidth
            variant="standard"
            onChange={onConfirmPasswordChange}
            sx={{ mb: 3 }}
          />
          <Button 
            type="submit"
            variant="contained" 
            fullWidth 
            sx={{ my: 2 }} 
            onClick={handleSignup}
          >
            Login
          </Button>
        </form>
        <DialogContentText>
          Already have an account? <Link
            component="button"
            variant="body2"
            onClick={onLoginFormOpen}
          >
            Log In
          </Link>
        </DialogContentText>
      </DialogContent>        
    </Dialog>
  );
}

export default SignupForm;