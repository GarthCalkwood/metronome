import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from "@mui/material/Slide";
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

const LoginForm = ({isOpen, onOpen, onClose}) => {
  const classes = useStyles()

  return (
    <>
      <Button color="inherit" variant="outlined" onClick={onOpen}>
        Login
      </Button>
      <Dialog classes={{paper: classes.paper}} open={isOpen} onClose={onClose} TransitionComponent={Transition}>
        <DialogTitle>
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
            Login
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <FormControlLabel 
            control={
              <Checkbox />
            } 
            sx={{ mt: 1 }}
            label="Remember me" 
          />
          <Button variant="contained" fullWidth sx={{ my: 2 }} onClick={onClose}>Login</Button>
          <DialogContentText>
            Don't have an account? <Link
              component="button"
              variant="body2"
            >
              Sign Up
            </Link>
          </DialogContentText>
        </DialogContent>        
      </Dialog>
    </>
  );
}

export default LoginForm;
