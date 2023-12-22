'use client'
//1, import area
import { Box, Grid, Typography } from '@mui/material';
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
             sx={{ display:"flex", flexWrap:"wrap",
             justifyContent:"space-between" }}> 
                <Box className="g_tbdr w2" sx={{alignSelf:"flex-end"}}>1 </Box> 
                <Box className="g_tbdr w2" sx={{alignSelf:"flex-start"}}>2 </Box> 
                <Box className="g_tbdr w2">3 </Box> 
                <Box className="g_tbdr w2">4 </Box> 
                <Box className="g_tbdr w2" sx={{alignSelf:"center"}}>5 </Box> 
                <Box className="g_tbdr w2">6 </Box> 
                <Box className="g_tbdr w2">7 </Box> 
                <Box className="g_tbdr w2" sx={{Self:"flex-end"}}>8 </Box> 
                <Box className="g_tbdr w2" sx={{alignSelf:"flex-end"}}>9 </Box>       
            </Box>

            <Box>
              <Grid>
                <Grid>

                </Grid>
              </Grid>
            </Box>
            
        </ThemeProvider>
  )
}

//3. export area
export default Dashboard;