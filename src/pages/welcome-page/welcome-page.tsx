import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material';



export const WelcomePage = () => {
    return (
        <Box
        sx={{
            background:'url("https://wallpaperaccess.com/full/1355318.jpg")',
            minHeight:'100vh',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            filter:'saturate(120%)',
        }}
        >
            <Typography
                color='white'
                variant='h1'
                sx={{
                    textAlign: 'center',
                    textShadow:'0px 0px 10px darkmagenta',
                    fontWeight: '600',
                    padding:'20px',
                }}
            >
                Material UI World
            </Typography>
            <Link to='/login'>
                <Button
                    variant='contained'
                    sx={{
                        bgcolor:'darkmagenta'
                    }}
                    >
                    Войти в приложение
                </Button>
            </Link>
        </Box>
    )
}