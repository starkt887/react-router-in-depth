import { Avatar, Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, NavLink, useLoaderData } from 'react-router-dom'

function Users() {
    const users = useLoaderData();

    return (
        <Box >
            <h2>Users </h2>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {users && users.map((user) => {
                    return <ListItem key={user.email} alignItems="flex-start">

                        <ListItemText
                            primary={user.firstName}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {user.email}
                                    </Typography>
                                    {user.company.address.address}
                                    <br/>
                                    <NavLink to={user.id.toString()}>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Learn More
                                        </Typography>
                                    </NavLink>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                })}
            </List>
        </Box>
    )
}

export default Users