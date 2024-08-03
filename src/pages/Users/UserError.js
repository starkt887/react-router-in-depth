import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function UserError() {
    const error = useRouteError();
    return (
        <Box >
            <h2>Error</h2>
            <Typography variant='p' >
                {error.message}
            </Typography>
            <Typography variant='h6'>
                <Link to='/'>Go back to homepage</Link>
            </Typography>
        </Box>
    )
}

export default UserError