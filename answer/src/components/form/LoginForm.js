import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../apis/UserAPICalls';
import { loginSuccess } from '../../modules/UserModule';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showErrorAlert, setShowErrorAlert] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const userInfo = {
            id: data.get('id'),
            password: data.get('password'),
        };

        try {
            const response = await getUserInfo();
            const user = response.find((user) => user.id === userInfo.id && user.password === userInfo.password);
            if (user) {
                dispatch(loginSuccess(user));
                localStorage.setItem('user', JSON.stringify(user));
                setShowErrorAlert(false);
                navigate('/');
            } else {
                setShowErrorAlert(true);
            }
        } catch (error) {
            console.error('로그인 에러:', error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="id"
                            label="ID"
                            name="id"
                            autoComplete="id"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log In
                        </Button>
                        {showErrorAlert && (
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert severity="error">Your login information did not match with our server. Please try again.</Alert>
                            </Stack>
                        )}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default LoginForm;
