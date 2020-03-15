import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
}));

const footers = [
    {
        title: 'About Us',
        description: ['Team', 'Become a Partner'],
    },
    {
        title: 'Address',
        description: ['3000 El Camino Real', 'Ste 200', 'Palo Alto, CA 94306'],
    },
    {
        title: 'Contact Us',
        description: ['Phone +1 (450) 232-1448', 'Toll free +1 (800) 232-1448', 'Email: xxx@esllab.com'],
    },
    {
        title: 'Follow Us',
        description: ['Facebook', 'Twitter', 'Instagram'],
    },
];

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'All Rights Reserved. © '}
        <Link color="inherit" href="#">ESL Lab</Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Footer = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" component="footer" className={classes.footer}>
            <Grid container spacing={4} justify="space-evenly">
            {footers.map(footer => (
                <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                </Typography>
                <ul>
                    {footer.description.map(item => (
                    <li key={item}>
                        <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                        </Link>
                    </li>
                    ))}
                </ul>
                </Grid>
            ))}
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Footer;