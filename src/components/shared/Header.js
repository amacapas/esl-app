import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    breadcrumbs: {
      "& ol": {
        justifyContent: 'flex-end',
      },
      "& ol > li": {
        fontSize: '14px',
      },
      margin: '5px 35px',
    },
    logo: {
      width: '180px'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
          <Container maxWidth="lg" component="main">
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
              <Link to="#">
                {(true)?'TH':'EN'} 
              </Link>
              <Link to="#">
                Sign In
              </Link>
            </Breadcrumbs>
          </Container>
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Container maxWidth="lg" component="main">
              <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                  <Link variant="h5" color="textPrimary" to="/" className={classes.link}>
                    <img src="/logo.png" alt="Language Lab Pro" className={classes.logo} />
                  </Link>
                </Typography>
                <nav>
                  <Link variant="button" color="textPrimary" to="/" className={classes.link}>
                    Home
                  </Link>
                  <Link variant="button" color="textPrimary" to="how-it-works" className={classes.link}>
                    How it Works
                  </Link>
                  <Link variant="button" color="textPrimary" to="about-us" className={classes.link}>
                    About Us
                  </Link>
                  <Link variant="button" color="textPrimary" to="contact-us" className={classes.link}>
                    Contact Us
                  </Link>
                </nav>
              </Toolbar>
            </Container>
          </AppBar>
        </React.Fragment>
    )
}

export default Header;