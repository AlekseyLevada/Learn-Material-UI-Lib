import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/material"
import { LoginForm } from "../../components/login-form/login-form"
import { SignUpForm } from '../../components/signup-form/sign-up-form'
import axios from 'axios'
import { IUser } from '../../common/types/IUser'


export const AuthPage: React.FC = (): JSX.Element => {

    const [isAuth, setIsAuth] = useState(true)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const submitFormData = async (e: { preventDefault: () => void }, formType: string) => {
        e.preventDefault()
        let dataFromServer: any = []

        await axios.get('http://localhost:5173/src/plugs/users.json')
            .then(data => dataFromServer = data.data)

        if (formType === 'loginForm') {
            const userData = { login, password }
            dataFromServer.map((el: IUser) => {
                if (el.login === userData.login && el.password === userData.password) {
                    navigate("/main")
                    return el
                }
            })
        }
        else {
            if (password !== confirmPassword) {
                alert('Пароли не совпадают, проверте правильность ввода')
            }
            else {
                const userData = { name, login, password, confirmPassword, email }
                console.log(userData)
            }
        }
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
                isAuth ? <LoginForm setLogin={setLogin} setPassword={setPassword} setIsAuth={setIsAuth} submitFormData={submitFormData} />

                    :

                    <SignUpForm setName={setName} setLogin={setLogin} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setEmail={setEmail} submitFormData={submitFormData} />
            }
        </Box>
    )
}