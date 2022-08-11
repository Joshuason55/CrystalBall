
import { Box,  createTheme,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography} from '@mui/material'
import React from 'react'


const theme = createTheme({
    typography: {
        fontFamily: 
        [
            "bahnschrift"
        ].join(",")
    }
});

const Summary = (props) => {
  return (
      <ThemeProvider theme = {theme}>
    <Box>
        <Box textAlign={'center'}>
            <h1 textAlign='center'>Summary</h1>
        </Box>
        <TableContainer className='table'>
            <Table size="medium" aria-label="a dense table" >
                <TableHead>
                <TableRow>
                    <TableCell align="center" >
                        <Typography> Our Prediction</Typography>
                    </TableCell>
                    <TableCell align="center">
                        <Typography>Your Prediction</Typography>
                    </TableCell>
                    <TableCell align="center">
                        <Typography>Reality</Typography>
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ 
                        '&:last-child td, &:last-child th': { border: 0 },
                        fontFamily:"bahnschrift",
                        
                        }}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                        <TableCell align="center"><Typography>$20</Typography></TableCell>
                        <TableCell align="center"><Typography>$15</Typography></TableCell>
                        <TableCell align="center"><Typography>$10</Typography></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Box textAlign={'center'}>
            <h3>You're currently averaging ??? accuracy!</h3>
        </Box>
        <Box textAlign={'center'}>
            <h3>The Crystal Ball is averaging ??? accuracy!</h3>
        </Box>
    </Box>
    </ThemeProvider>
  )
}

export default Summary