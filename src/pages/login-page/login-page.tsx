import { Box } from "@mui/material"
import { Authentication } from "../../components/auth-form/auth-form"


export const LoginPage = () => {
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
            <Authentication />
        </Box>
    )
}