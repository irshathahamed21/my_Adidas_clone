

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


import { Box, Container } from '@mui/material';
import "./login.css"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login() {
  const [open, setOpen] = React.useState(false);
 const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 
  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
 
  return (
    <div>
      <div onClick={handleClickOpen}>
      <PermIdentityIcon/>
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth = {maxWidth}
       
    
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
      <Container sx = {{width:"500px", display:"flex", justifyContent:"space-between"}}>
          <Box sx = {{width:"450px"}}>

        <h1>ENJOY ADICLUB BENEFITS WHEN YOU LOG IN</h1>

        <ul>
          <li>Unlock discount vouchers</li>
          <li>Get free shipping</li>
          <li>Gain access to exclusive products</li>
        </ul>
       

      <form className = "signup-form">
        
        <h3>LOG IN</h3>
        <p>Let's check if you already have an account</p>
       <input type="email" placeholder = "Email *"  />

       
       
       
      
      <button className = "register_button">REGISTER</button>
     </form>

    

      </Box>
         


            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
             <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              style = {{background:"white"}}
              sx = {{marginRight:"-81px",
                    marginTop:"-78%"}}
            
            >
              <CloseIcon />
            </IconButton>
          
            </Container>
       
      </Dialog>
    </div>
  );
}


