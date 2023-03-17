import { useState } from 'react'
import { Box } from "@mui/material"
import { LoginForm } from "../../components/login-form/login-form"
import { SignUpForm } from '../../components/signup-form/sign-up-form'


export const AuthPage: React.FC = (): JSX.Element => {

    const [isAuth, setIsAuth] = useState(true)

    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    //console.log(name, login, password, confirmPassword, email)

    const dataBaseRequest = async (e: React.MouseEvent<HTMLButtonElement>) => {

        let recivedData = null

        await fetch('http://localhost:5173/src/plugs/users.json')
            .then(res => res.json())
            .then(data => recivedData = data)
            console.log(recivedData, login, password)
    }

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

                <SignUpForm setName={setName} setLogin={setLogin} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setEmail={setEmail} setIsAuth={setIsAuth}/>
            }
        </Box>
    )
}