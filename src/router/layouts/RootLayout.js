import { Box, Divider } from '@mui/material'
import React from 'react'
import Header from '../../comps/Header'
import { Outlet } from 'react-router-dom'
import BreadCrumbs from '../../comps/BreadCrumbs'

function RootLayout() {
    return (
        <Box>
            <Header />
            <Box sx={{
                marginTop: "5rem",
            }} />
            <BreadCrumbs />
            
            <Box >
                <Outlet />
            </Box>
        </Box>
    )
}

export default RootLayout