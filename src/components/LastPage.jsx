
import { Box, Button, createTheme, TextField, ThemeProvider,} from '@mui/material'
import React from 'react'
import LastLogo from './subcomponents/LastLogo';
import ReplayIcon from '@mui/icons-material/Replay';

const theme = createTheme({
    typography: {
        fontFamily: 
        [
            "bahnschrift"
        ].join(",")
    }
});

const LastPage = (props) => {
  return (
    <ThemeProvider theme = {theme}>
        <Box marginTop={35}>
            <Box className='frontpage'fontSize={{ xs: 22, sm: 26, md: 32 }}>
                <h1>Thank You For Playing</h1>
            </Box>
            <LastLogo/>
            <Box marginTop={3} textAlign={'center'} fontSize={{ xs: 15, sm: 20 }}>
                <h4>The Crystal Ball uses machine learning to get more advanced every day, <br/>Enter your email to receive updates on the Crystal Ball!</h4>
            </Box>
            {props.emailCounter===0
            ?
                <Box textAlign={'center'}>
                    <Box marginTop={2} className='btn'>
                        <TextField
                            id="outlined-name"
                            label="Email"
                            sx={{ m: 1, width: '35ch' }}
                        />
                            <Button variant="contained" color="success" size='large' onClick={()=> props.setemailCounter(1)}>Submit</Button>
                    </Box>
                </Box>
                            :
                            <Box marginTop={3} textAlign={'center'}>
                                <h3>Email Submitted!</h3>
                            </Box>
                }
            <Box textAlign={'center'} marginTop={5}>
                <Button variant='contained' style={{ padding: "10px 29px" }} endIcon={<ReplayIcon/>} onClick={()=>{ props.setLoading(false); props.getStock();props.setpageNumber(props.pageNumber-2); props.setInput(0)}}> Play Again</Button>
            </Box>
        </Box>
    </ThemeProvider>
  )
}

export default LastPage