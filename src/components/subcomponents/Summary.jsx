
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
    <Box marginTop={6}>
        <Box textAlign={'center'}>
            <h1 textAlign='center'>Summary</h1>
        </Box>
        <TableContainer className='table'>
            <Table size="medium" aria-label="a dense table" >
                <TableHead>
                <TableRow>
                    <TableCell align="center">
                        <Typography><b>Actual Price</b></Typography>
                    </TableCell>
                    <TableCell align="center" >
                        <Typography> <b>Crystal Ball Prediction</b><br/>(Deviation %)</Typography>
                    </TableCell>
                    <TableCell align="center">
                        <Typography><b>Your Prediction</b><br/>(Deviation %)</Typography>
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ 
                        '&:last-child td, &:last-child th': { border: 0 },
                        fontFamily:"bahnschrift",
                        
                        }}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                        <TableCell align="center"><Typography><b>${props.actualPrice.toFixed(2)}</b></Typography></TableCell>
                        <TableCell align="center"><Typography><b>${props.cbPrediction.toFixed(2)}</b><br/>({(100*props.Average[6]).toFixed(2)}%)</Typography></TableCell>
                        <TableCell align="center"><Typography><b>${props.input}</b><br/>({(100*props.Average[5]).toFixed(2)}%)</Typography></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Box marginTop={5} textAlign={'center'}>
            <h2>You are currently averaging {(100*props.Average[0]).toFixed(2)}% deviation!</h2>
        </Box>
        <Box textAlign={'center'}>
            <h2>The Crystal Ball is averaging {(100*props.Average[1]).toFixed(2)}% deviation!</h2><br/>
            <h2>You have played {props.numAttempts > 1 ? `${props.numAttempts} times` : `${props.numAttempts} time`}, your current win streak is {props.Average[7]}!</h2>
        </Box>
    </Box>
    </ThemeProvider>
  )
}

export default Summary