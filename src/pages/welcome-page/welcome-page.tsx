import './styles/style.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';



export const WelcomePage: React.FC = () => {
    return (
        <div className="welcome-page">
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
        </div>
    )
}