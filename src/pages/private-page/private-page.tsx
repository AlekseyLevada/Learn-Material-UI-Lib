import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Box } from '@mui/material/'


export const PrivatePage: React.FC = () => {

    const [isAuth, setIsAuth] = useState(true)

    return(
        <Box>
            {
                isAuth? <Outlet/> : <Navigate to='/login'/>
            }
        </Box>
    )
}