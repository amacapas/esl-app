import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const useStyles = makeStyles(theme => ({
    wrapper: {
        backgroundColor: theme.palette.grey[500],
        padding: '2.5rem 0',
        margin: '0px',
    },
    banner: {
        '& h1': {
            textTransform: 'uppercase',
        }
    }
}));

const HowItWorks = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header />
            <Box m={1} className={classes.wrapper}>
                <Container maxWidth="lg" component="main" className={classes.banner}>
                    <h1>How it works</h1>
                </Container>
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default HowItWorks;