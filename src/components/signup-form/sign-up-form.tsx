import { Container, Typography, TextField, Button } from "@mui/material"

import { IAuthUserInfo } from "../../common/types/IAuthUserInfo"

export const SignUpForm: React.FC<IAuthUserInfo> = (props: IAuthUserInfo): JSX.Element => {


    return (
        <Container
            sx={{
                border: '2px solid #454545',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5px',
                minHeight:'300px',
                boxShadow:'2px 2px 10px #afafaf',
                padding:'10px',
            }}
            maxWidth='xs'
        >
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
            <TextField
                autoFocus
                required
                size="small"
                variant='outlined'
                label='Name'
                sx={{
                    mb: '20px'
                }}>
            </TextField>
            <TextField
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
                variant='outlined'
                label='E-mail'
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
            <TextField
                required
                size="small"
                type='password'
                variant='outlined'
                label='Confirm password'
                sx={{
                    mb: '20px'
                }}>
            </TextField>
                <Button
                    fullWidth={true}
                    variant="contained"
                    sx={{
                        mb:'20px',
                    }}
                >
                    Sign Up
                </Button>
        </Container>
    )
}
