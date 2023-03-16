import { useState} from 'react'
import { Box } from "@mui/material"
import { Authentication } from "../../components/auth-form/auth-form"
import { SignUp } from "../../components/signup-form/sign-up-form"


export const LoginPage = () => {

    const [isAuth, setIsAuth] = useState(true)

    const some = true

    return (
        <Box
        sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height:'100vh',
            padding: '20px',
        }}
        >
            {
                isAuth? <Authentication data={some}/> : <SignUp/>
            }
        </Box>
        
)
}