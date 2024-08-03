import { Box, Breadcrumbs, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function BreadCrumbs() {

    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return <NavLink key={crumb} to={currentLink} style={{ textDecoration: 'none', textTransform: "uppercase" }}>
                {crumb}
            </NavLink>
        })


    return (
        <Box>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb">

                    {crumbs}
                </Breadcrumbs>
            </div>
            {crumbs.length !== 0 && <Divider sx={{
                marginBottom: "10px",
            }} />}
        </Box>
    )
}

export default BreadCrumbs