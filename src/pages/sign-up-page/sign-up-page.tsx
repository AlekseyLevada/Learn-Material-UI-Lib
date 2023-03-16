import { useState} from 'react'
import { Box } from "@mui/material"
import { Authentication } from "../../components/authentication/authentication"
import { SignUp } from "../../components/sign-up/sign-up-form"


export const SignUpPage: React.FC = () => {

    const [isAuth, setIsAuth] = useState(true)

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
                isAuth? <Authentication/> : <SignUp/>
            }
        </Box>
        
)
}