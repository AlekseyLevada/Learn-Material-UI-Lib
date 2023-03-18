import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginForm } from "../../components/login-form/login-form"
import { SignUpForm } from '../../components/signup-form/sign-up-form'
import { IUser } from '../../common/types/IUser'
import {RootState} from "../../store/store";

import axios from 'axios'
import { Box } from "@mui/material"
import {useAppDispatch, useAppSelector} from "../../store/hoocks";


export const AuthPage: React.FC = (): JSX.Element => {

    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const { isAuth } = useAppSelector((state:RootState) => state.auth)

    const navigate = useNavigate()

    console.log(isAuth)

    const submitFormData = async (e: { preventDefault: () => void }, formType: string) => {
        e.preventDefault()
        let dataFromServer: any = []
        await axios.get('http://localhost:5173/src/plugs/users.json')
            .then(res => dataFromServer = res.data)

        if (formType === 'loginForm') {
            const userData = { login, password }
            const user = dataFromServer.find((el: IUser) => el.login === userData.login && el.password === userData.password)
            if (user) {
                navigate('/main')
            }
            else alert('Нет такого пользователя!')
        }

        if (formType === 'signUpForm') {
            const userData = {
                name,
                login,
                password,
                confirmPassword,
                email
            }
            console.log(userData)
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
                isAuth ? <LoginForm setLogin={setLogin} setPassword={setPassword} submitFormData={submitFormData}/>
                    :
                    <SignUpForm setName={setName} setLogin={setLogin} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setEmail={setEmail} submitFormData={submitFormData} />
            }
        </Box>
    )
}