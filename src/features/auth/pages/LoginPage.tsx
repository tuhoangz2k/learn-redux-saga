import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../authSlice';

type LoginPageProps = {};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    box: {
        padding: theme.spacing(3),
    },
}));

const LoginPage = (props: LoginPageProps) => {
    const className = useStyles();
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(
            authActions.login({
                username: 'wiburach',
                password: 'wiburach',
            }),
        );
    };
    return (
        <div className={className.root}>
            <Paper elevation={1} className={className.box}>
                <Typography variant="h5" component="h1">
                    Student Management
                </Typography>
                <Box mt={4}>
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                        Fake Login
                    </Button>
                </Box>
            </Paper>
        </div>
    );
};

export default LoginPage;
