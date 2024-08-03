import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Form, useActionData } from 'react-router-dom'

export default function Contact() {

  const respdata = useActionData();
  return (
    <Box sx={{
      marginTop: "2rem"
    }}>
      <h2>Contact us</h2>
      <Form method='post' action='/help/contact'>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <TextField id="outlined-basic" label="Email" variant="outlined" name="email" sx={{ pb: 2 }} />
                <TextField id="outlined-basic" label="Message" multiline variant="outlined" name="msg" sx={{ pb: 2 }} />
                <Button variant='contained' type='submit'>Submit</Button>
                <Typography>{respdata && respdata.error}</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>

        </div>
      </Form>
    </Box>
  )
}
