import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';

import './Navbar.css';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isContactUsPage, setIsContactUsPage] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleShareClick = () => {
    setShareOpen(true);
  };

  const handleClose = () => {
    setShareOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginPage(true);
  };

  const handleBackToHome = () => {
    setIsLoginPage(false);
    setIsContactUsPage(false);
  };

  const handleContactUsClick = () => {
    setIsContactUsPage(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with', email, password);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  if (isLoginPage) {
    return (
      <Box className="login-container">
        <Box className="login-form">
          <Typography variant="h5" className="login-title">Login</Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleLogin}
          >
            <TextField
              className="login-text-field"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className="login-text-field"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="login-submit-button"
            >
              Login
            </Button>
            <Button
              onClick={() => console.log('Forgot Password clicked')}
              variant="text"
              color="inherit"
            >
              Forgot Password?
            </Button>
          </Box>
          <Button onClick={handleBackToHome} variant="text" color="inherit">
            Back to Home
          </Button>
        </Box>
      </Box>
    );
  }

  if (isContactUsPage) {
    return (
      <Box className="contact-container">
        <Box className="contact-form">
          <Typography variant="h5" className="contact-title">Contact Us</Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Message"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </Box>
          <Button onClick={handleBackToHome} variant="text" color="inherit">
            Back to Home
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <div>
      <AppBar position="static" className="appbar">
        <Toolbar className="toolbar">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} className="menu-button">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            TDPP PARTY
          </Typography>
          <Hidden smDown>
            <div className="nav-buttons nav-buttons-top">
              {searchOpen ? (
                <TextField
                  className="search-field"
                  variant="outlined"
                  size="small"
                  placeholder="Search..."
                  onBlur={() => setSearchOpen(false)}
                  autoFocus
                  fullWidth
                />
              ) : (
                <IconButton color="inherit" onClick={handleSearchClick}>
                  {/* <SearchIcon /> */}
                </IconButton>
              )}
              <IconButton color="inherit" onClick={handleShareClick}>
                {/* <ShareIcon /> */}
              </IconButton>
              <Button color="inherit" onClick={handleLoginClick}>Login</Button>
              <Button color="inherit" onClick={handleContactUsClick}>Contact Us</Button>
              <Button color="inherit">English</Button>
            </div>
          </Hidden>
        </Toolbar>
        <Hidden mdUp>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
              <Box sx={{ p: 2 }}>
                {/* <Button color="inherit" onClick={handleSearchClick} fullWidth>
                  <SearchIcon /> Search
                </Button> */}
                {/* <Button color="inherit" onClick={handleShareClick} fullWidth>
                  <ShareIcon /> Share
                </Button> */}
                <Button color="inherit" onClick={handleLoginClick} fullWidth>
                  Login
                </Button>
                <Button color="inherit" onClick={handleContactUsClick} fullWidth>
                  Contact Us
                </Button>
                <Button color="inherit" fullWidth>
                  Upcoming Events
                </Button>
                <Button color="inherit" fullWidth>
                  Media Resources
                </Button>
                <Button color="inherit" fullWidth>
                  TDPP Live
                </Button>
                <Button color="inherit" fullWidth>
                  Join TDPP
                </Button>
                <Button color="inherit" fullWidth>
                  Make a Donation
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Toolbar className="toolbar">
            <div className="nav-buttons nav-buttons-bottom">
              <Button color="inherit">UPCOMING EVENTS</Button>
              <Button color="inherit">MEDIA RESOURCES</Button>
              <Button color="inherit">TDPP LIVE</Button>
              <Button color="inherit">JOIN TDPP</Button>
              <Button color="inherit">MAKE A DONATION</Button>
            </div>
          </Toolbar>
        </Hidden>
      </AppBar>

      <Dialog open={shareOpen} onClose={handleClose}>
        <DialogTitle>Share via</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={3} sm={2} className="share-option">
              <IconButton onClick={() => window.open('https://www.linkedin.com/login', '_blank')}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2">LinkedIn</Typography>
            </Grid>
            <Grid item xs={3} sm={2} className="share-option">
              <IconButton onClick={() => window.open('https://web.whatsapp.com/', '_blank')}>
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2">WhatsApp</Typography>
            </Grid>
            <Grid item xs={3} sm={2} className="share-option">
              <IconButton onClick={() => window.open('https://in.pinterest.com/', '_blank')}>
                <PinterestIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2">Pinterest</Typography>
            </Grid>
            <Grid item xs={3} sm={2} className="share-option">
              <IconButton onClick={() => window.open('https://mail.google.com/mail/u/0', '_blank')}>
                <EmailIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2">Gmail</Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Navbar;