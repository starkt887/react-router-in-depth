import { Box, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Help() {
    return (
        <Box sx={{
            marginTop: "5rem"
        }}>
            <h2>Website Help section</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Box sx={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Button variant='contained' sx={{mr:1}}>
                    <NavLink to='faqs'style={{ color: "#fff", textDecoration: "none" }}>
                        View FAQs
                    </NavLink>
                </Button>
                <Button variant='contained'>
                    <NavLink to='contact'style={{ color: "#fff", textDecoration: "none" }}>
                        Contact us
                    </NavLink>
                </Button>
            </Box>
        </Box>
    )
}

export default Help