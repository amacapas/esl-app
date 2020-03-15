import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    menu: {
      "& > a": {
        display: 'inline-block',
        margin: theme.spacing(1, 1.5),
        outlineStyle: 'none'
      }
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
      display: 'inline-block',
      flexGrow: 1,
      margin: '10px 0',
      outlineStyle: 'none',

      "& > img": {
        width: '195px'
      }
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
              <Link to="/login">
                Sign In
              </Link>
            </Breadcrumbs>
          </Container>
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Container maxWidth="lg" component="main">
              <Toolbar className={classes.toolbar}>
                <Link to="/" className={classes.logo}>
                  <img src="/logo.png" alt="Language Lab Pro" />
                </Link>
                <nav className={classes.menu}>
                  <Link to="/">Home</Link>
                  <Link to="/how-it-works">How it Works</Link>
                  <Link to="/about-us">About Us</Link>
                  <Link to="/contact-us">Contact Us</Link>
                </nav>
              </Toolbar>
            </Container>
          </AppBar>
        </React.Fragment>
    )
}

export default Header;