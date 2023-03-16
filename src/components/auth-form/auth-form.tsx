import { useState } from 'react'
import { Container, Typography, TextField, Button } from "@mui/material"
import type { IisAuth } from '../../common/isAuth'


export const Authentication = (props: IisAuth) => {

    const {isAuth, setIsAuth} = props

    // let setIsAuthState = () => {
    //     setIsAuth(true)
    // }


    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const dataBaseRequest = async (e: any) => {
        let recivedData = null
        await fetch('http://localhost:5173/src/plugs/users.json')
            .then(res => res.json())
            .then(data => recivedData = data)
            console.log(recivedData)
    }

    return (
        <Container
            sx={{
                border: '2px solid #454545',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5px',
                boxShadow: '2px 2px 10px #afafaf',
                minHeight:'280px',
            }}
            maxWidth='xs'
        >
            <form action="#">
            <Typography
                textAlign='center'
                variant="h4"
                fontWeight='400'
                mb={4}
            >
                Log In
            </Typography>
                <TextField onChange={(e) => setLogin(e.target.value)}
                    fullWidth
                    autoFocus
                    required
                    size="small"
                    variant='outlined'
                    label='Login'
                    sx={{
                        mb: '20px'
                    }}>
                </TextField>
                <TextField onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                    size="small"
                    type='password'
                    variant='outlined'
                    label='Password'
                    sx={{
                        mb: '20px'
                    }}>
                </TextField>
                <Button
                    onClick={(e) => dataBaseRequest(e)}
                    fullWidth={true}
                    variant="contained"
                >
                    Log In
                </Button>
            <Typography
                variant="subtitle1"
                textAlign='center'
                sx={{
                    mb: '20px',
                    mt: '20px',
                }}
            >
                Don't have an account? <Typography onClick={() => setIsAuth(false)}
                    sx={{
                        display: 'inline',
                        color: '#1665C0',
                        fontWeight: '700',
                        cursor:'pointer',
                    }}
                >
                    Register!
                </Typography>
            </Typography>
            </form>
        </Container>
    )
}
