import { Box, Button, createTheme, Grid, ThemeProvider } from '@mui/material'
import React from 'react'
import Feedback from './subcomponents/Feedback'
import PageLogo from './subcomponents/PageLogo'
import Summary from './subcomponents/Summary'
import ReplayIcon from '@mui/icons-material/Replay';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const theme = createTheme({
    typography: {
        fontFamily: 
        [
            "bahnschrift"
        ].join(",")
    }
});

const SummaryPage = (props) => {
    
  return (
    <ThemeProvider theme={theme}>

        <Grid marginTop={3} container spacing ={2}>
            <Grid item xs={0} sm={0} md={0.75} lg={0.75} xl={1.5}></Grid>

            <Grid item xs={5} sm={5} md={4.75} lg={5.25} xl={4.25}>
                <Grid container direction='column'fontSize={{ xs: 14, sm: 17, md: 20, lg:20.5, xl:20.5 }}>
                    <h1> Crystal Ball Test</h1>
                    <h4>Guess the Stock Price in 10 Days</h4>
                </Grid>
            </Grid>

            <Grid item xs={1} sm={0}></Grid>

            <Grid item xs={5} sm={5} md={4} lg={3} xl={4.5} textAlign='center' >
                <PageLogo/>  
            </Grid>

    

            <Grid item xs={0} sm={2} md={2.5} lg={3} xl={3.25}>
                </Grid>
        </Grid>
        <Grid container spacing={3} >
            <Grid item md={.625} xl={1}></Grid>
            <Grid item xs={12} md={6} xl={6}>

                <img className="stockimage"
                src={props.fullImg}
                alt='Anonymous'
            />
            </Grid>

            <Grid item xs={12} sm={11} md={4.75} xl={4}>
                <Summary Average={props.Average} input={props.input} cbPrediction={props.cbPrediction} 
                        actualPrice={props.actualPrice} AttemptSummary={props.AttemptSummary} numAttempts={props.numAttempts}
                        />
                { props.feedbackCounter===0
                ?<Feedback feedbackCounter={props.feedbackCounter} setfeedbackCounter={props.setfeedbackCounter}/>
                :props.feedbackCounter===1?
                <Box marginTop={2} textAlign={'center'}>
                    Feedback Submitted!
                </Box>
                :''
                }
                <Box textAlign={'center'}>
                    <Box marginTop={2}>
                        <Button variant='contained' style={{ padding: "10px 29px" }} endIcon={<ReplayIcon/>} onClick={()=>{props.setLoading(false); props.setfeedbackCounter(props.feedbackCounter*2);props.getStock(); props.setpageNumber(props.pageNumber-1); props.setInput(0)}}> Play Again</Button>
                    </Box>
                    <Box marginTop={1}>
                        <Button variant='contained' style={{ padding: "10px 50px" }} endIcon={<ArrowForwardIcon/>} onClick={()=>{props.setfeedbackCounter(props.feedbackCounter*2);props.setpageNumber(props.pageNumber+1)}}>Sign up</Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item sm={1} md={.625} xl={3}></Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default SummaryPage