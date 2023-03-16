import { Box } from "@mui/material"
import { SignUp } from "../../components/signup-form/sign-up-form"


export const RegisterPage = () => {

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
            <SignUp/>
        </Box>
        
)
}