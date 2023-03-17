import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Box } from '@mui/material/'


export const PrivatePage: React.FC = (): JSX.Element => {

    const [isAuth, setIsAuth] = useState(true)

    return(
        <Box>
            {
                isAuth? <Outlet/> : <Navigate to='/login'/>
            }
        </Box>
    )
}