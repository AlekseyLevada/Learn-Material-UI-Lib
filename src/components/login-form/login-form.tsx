import React from 'react'
import { Container, Typography, TextField, Button } from "@mui/material"

import { ILoginForm } from "../../common/types/ILoginForm"
import { useAppDispatch } from "../../store/hoocks"
import {login} from "../../store/slices/auth/auth";


export const LoginForm: React.FC<ILoginForm> = (props: ILoginForm): JSX.Element => {

    const { setLogin, setPassword, submitFormData } = props

    const dispatch = useAppDispatch()

    return (
        <Container
            sx={{
                border: '2px solid #454545',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5px',
                boxShadow: '2px 2px 10px #afafaf',
                minHeight: '300px',
                padding: '10px',
            }}
            maxWidth='xs'
        >
            <form onSubmit={(e) => submitFormData(e, 'loginForm')}>
                <Typography
                    textAlign='center'
                    variant="h4"
                    fontWeight='600'
                    mb={2}
                >
                    Log In
                </Typography>
                <Typography
                    variant="subtitle1"
                    textAlign='center'
                    mb={2}
                >
                    Enter your login and password
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
                    type="submit"
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
                    Don't have an account?
                    <Typography onClick={() => dispatch(login(false))}
                        sx={{
                            display: 'inline',
                            color: '#1665C0',
                            fontWeight: '700',
                            cursor: 'pointer',
                            ml: '5px',
                        }}
                    >
                        Register!
                    </Typography>
                </Typography>
            </form>
        </Container>
    )
}
