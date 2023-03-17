import { useState } from 'react'
import { Box } from "@mui/material"
import { LoginForm } from "../../components/login-form/login-form"
import { SignUpForm } from '../../components/signup-form/sign-up-form'
import axios from 'axios'


export const AuthPage: React.FC = (): JSX.Element => {

    const [isAuth, setIsAuth] = useState(true)

    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: '20px',
            }}
        >
            {
                isAuth? <LoginForm setLogin={setLogin} setPassword={setPassword} setIsAuth={setIsAuth}/>
                
                :

                <SignUpForm setName={setName} setLogin={setLogin} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setEmail={setEmail}/>
            }
        </Box>
    )
}