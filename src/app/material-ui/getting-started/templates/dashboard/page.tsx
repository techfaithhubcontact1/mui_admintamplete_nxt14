'use client'
//1, import area
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'

//2. define area
function Dashboard() {
    //2.1 hooks area

    //2.2 defination area
    const theme = createTheme();

    //2.3 return statements 
  return (
        <ThemeProvider theme={theme}> 
            <Box className="g_tbdr w"
             sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}> 

                <Box className="g_tbdr w2">Box 1</Box> 
                <Box className="g_tbdr w2">Box 2</Box> 
                <Box className="g_tbdr w2">Box 3</Box> 
                <Box className="g_tbdr w2">Box 4</Box> 
                <Box className="g_tbdr w2">Box 5</Box> 
                <Box className="g_tbdr w2">Box 6</Box> 
                <Box className="g_tbdr w2">Box 7</Box> 
                <Box className="g_tbdr w2">Box 8</Box> 
                <Box className="g_tbdr w2">Box 9</Box> 
                <Box className="g_tbdr w2">Box 10</Box> 
            </Box>
            
        </ThemeProvider>
  )
}

//3. export area
export default Dashboard;