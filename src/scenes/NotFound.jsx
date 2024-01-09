import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Payments from '../svg/Payments'

const NotFound = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
        <Paper sx={{borderRadius:"5px", padding:"1rem", minHeight:"23vh"}}>
      <Typography variant='h4'>The page is under construction</Typography>
              <Typography variant='caption'>Please Navigate to the Payments <span  style={{ backgroundColor:"rgb(93 87 91)", display:"flex", justifyContent:'center', alignItems:"center", borderRadius:"5px", width:"51px", height:"38px", margin:"0px 2px"}}> <Payments/> </span>page through the sidebar, to access the assigned page</Typography>
        </Paper>
    </Box>
  )
}

export default NotFound
