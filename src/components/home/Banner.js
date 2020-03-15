import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const Banner = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box m={1} className={classes.wrapper}>
                <Container maxWidth="lg" component="main" className={classes.banner}>
                    <Typography component="h1" variant="h1">
                        We offer conversational &amp; business english lessons
                    </Typography>
                    <Typography component="h4" variant="h4" align="center">
                        Lesson Package starts at 3,000 THB/month
                    </Typography>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Banner;