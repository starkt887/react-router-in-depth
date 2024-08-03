import { Box } from '@mui/material'
import React from 'react'
import Header from '../../comps/Header'
import { Outlet } from 'react-router-dom'
import Help from '../../pages/Help'

function UserLayout() {
    return (
        <Box>

            <Box >
                <Outlet />
            </Box>
        </Box>
    )
}

export default UserLayout