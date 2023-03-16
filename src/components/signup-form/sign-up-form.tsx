import { Container, Typography, TextField, InputAdornment, Button } from "@mui/material"
import { Link } from 'react-router-dom'

export const SignUp = () => {
    return (
        <Container
            sx={{
                border: '2px solid #454545',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5px',
                minHeight:'280px',
                boxShadow:'2px 2px 10px #afafaf',
            }}
            maxWidth='xs'
        >
            <Typography
                textAlign='center'
                variant="h4"
                fontWeight='400'
                mb={4}
            >
                Sign Up
            </Typography>
            <TextField
                autoFocus
                required
                size="small"
                variant='outlined'
                label='Login'
                sx={{
                    mb: '20px'
                }}>
            </TextField>
            <TextField
                required
                size="small"
                type='password'
                variant='outlined'
                label='Password'
                sx={{
                    mb: '20px'
                }}>
            </TextField>
            <Link to='/main'>
                <Button
                    fullWidth={true}
                    variant="contained"
                >
                    Sign Up
                </Button>
            </Link>
        </Container>
    )
}
