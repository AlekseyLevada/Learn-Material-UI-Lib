import React from 'react'
import { Container, Typography, TextField, Button } from "@mui/material"

import { ISignUpForm } from "../../common/types/ISignUpForm"

export const SignUpForm: React.FC<ISignUpForm> = (props: ISignUpForm): JSX.Element => {

    const { setName, setLogin, setPassword, setConfirmPassword, setEmail, submitFormData } = props

    return (
        <Container
            sx={{
                border: '2px solid #454545',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5px',
                minHeight: '300px',
                boxShadow: '2px 2px 10px #afafaf',
                padding: '10px',
            }}
            maxWidth='xs'
        >
            <form onSubmit={(e) => submitFormData(e, 'signUpForm')}>
                <Typography
                    textAlign='center'
                    variant="h4"
                    fontWeight='600'
                    mb={2}
                >
                    Sign Up
                </Typography>
                <Typography
                    variant="subtitle1"
                    textAlign='center'
                    mb={2}
                >
                    Enter your login and password for registration
                </Typography>
                <TextField onChange={(e) => setName(e.target.value)}
                    autoFocus
                    required
                    size="small"
                    variant='outlined'
                    label='Name'
                    fullWidth
                    sx={{
                        mb: '20px',
                    }}>
                </TextField>
                <TextField onChange={(e) => setLogin(e.target.value)}
                    fullWidth
                    required
                    size="small"
                    variant='outlined'
                    label='Login'
                    sx={{
                        mb: '20px'
                    }}>
                </TextField>
                <TextField onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    size="small"
                    variant='outlined'
                    label='E-mail'
                    sx={{
                        mb: '20px'
                    }}>
                </TextField>
                <TextField onChange={(e) => setPassword(e.target.value)}
                    required
                    size="small"
                    fullWidth
                    type='password'
                    variant='outlined'
                    label='Password'
                    sx={{
                        mb: '20px'
                    }}>
                </TextField>
                <TextField onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    fullWidth
                    size="small"
                    type='password'
                    variant='outlined'
                    label='Confirm password'
                    sx={{
                        mb: '20px'
                    }}>
                </TextField>
                <Button
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    sx={{
                        mb: '20px',
                    }}
                >
                    Sign Up
                </Button>
            </form>
        </Container>
    )
}
