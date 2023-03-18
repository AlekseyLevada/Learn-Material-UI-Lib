import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Box } from '@mui/material/'
import {useAppSelector} from "../../store/hoocks";
import {RootState} from "../../store/store";

export const PrivatePage: React.FC = (): JSX.Element => {

    const { isAuth } = useAppSelector((state: RootState) => state.auth)

    return(
        <Box>
            {
                isAuth? <Outlet/> : <Navigate to='/login'/>
            }
        </Box>
    )
}