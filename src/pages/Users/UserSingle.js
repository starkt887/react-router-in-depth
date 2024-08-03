import { Box } from '@mui/material';
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


export const UserSingle = () => {

    const { id } = useParams();
    const userData = useLoaderData();
    return (
        <Box >
            <h2>Name: {userData.firstName} {userData.lastName}</h2>

        </Box>
    )
}


