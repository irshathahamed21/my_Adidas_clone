// import React from 'react'

// import Popup from 'reactjs-popup';
// import "./signup.css"



// function Signup() {
//   return (
//     <div>
//     <Popup  className = "popup" trigger={<button> signup </button>} 
//     >
//          <div className = "signup__form">

// <h1>CREATE YOUR ACCOUNT</h1>
// <h4>Sign up now and get 15% off your first order.</h4>

// <form>
//   <input type="email" placeholder = "Email *"  />
//   <input type="password" placeholder = "Password *"  />


// </form>

// </div>
     
//     </Popup>
//   </div>
//   )
// }

// export default Signup


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

import "./signup.css"
import { Box, Container } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Signup() {
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
        sign in
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth = {maxWidth}
       
    
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
      <Container sx = {{width:"750px", display:"flex", justifyContent:"space-between"}}>
          <Box sx = {{width:"700px", border:"3px solid orange"}}>
        <h1>CREATE YOUR ACCOUNT</h1>
        <p>Sign up now and get 15% off your first order.</p>

      <form className = "signup-form">
       <input type="email" placeholder = "Email *"  />
        <input type="password" placeholder = "Password *"  />
       
       <div className="checkbox__div">
        <input type="checkbox"   />
        <label> Yes, I am over 18 years old *</label>
        </div>
        <div className="checkbox__div">
        <input type="checkbox"   />
        <label>I would like to stay up to date with adidas. I agree to receive personalised email <br></br>
         marketing messages from adidas India Marketing Pvt. Ltd. Read more</label>
        </div>
        <div className="checkbox__div">
        <input type="checkbox"   />
        <label> I have read and accepted the Terms & Conditions  the adiClub Terms & Conditions <br/>and the adidas Privacy Policy. </label>
        </div>
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
              sx = {{marginRight:"-23px",
                    marginTop:"-53px"}}
            
            >
              <CloseIcon />
            </IconButton>
          
            </Container>
       
      </Dialog>
    </div>
  );
}


