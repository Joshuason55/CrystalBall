import { Box, Button, Checkbox, createTheme, FormControlLabel, FormGroup, Grid,  Slider,  ThemeProvider } from '@mui/material';
import React, {useState} from 'react'
import Log from '../log'

const theme = createTheme({
    typography: {
        fontFamily: 
        [
            "bahnschrift"
        ].join(",")
    }
});

const marks = [
    {
      value: 0,
      label: '$0',
    },

    {
      value: 100,
      label: '$100',
    },
  ];

function valuetext(value) {
    return `$${value}`;
  }




const FollowUp = (props) => {
    const [dr_accuracy, setDr_accuracy] = useState(false)
    const [dr_nota, setDr_nota] = useState(false)
    const [dr_price, setDr_price] = useState(false)
    const [dr_noinvest, setDr_noinvest] = useState(false)
    const [dr_other, setDr_other] = useState(false)

    const [lr_price, setLr_price] = useState(30)
  return (
    <ThemeProvider theme = {theme}>
        { props.showDetail===0
        ?' '
        : props.showDetail===2 ?
        <Box textAlign={'center'}>
            <Box textAlign={'left'}>
                <Grid container>
                    <Grid item xs={2} sm={3} md={1} lg={2}></Grid>
                    <Grid item xs={10} sm={9} md={10} lg={9}>
                    <h3>Why not?</h3>
                        <FormGroup>
                            <FormControlLabel checked = {dr_accuracy} onChange={(e) => setDr_accuracy(e.target.checked)} control={<Checkbox />} label="I was more accurate" />
                            <FormControlLabel checked = {dr_nota} onChange={(e) => setDr_nota(e.target.checked)} control={<Checkbox />} label="I don't use technical analysis for stock prediction" />
                            <FormControlLabel checked = {dr_price} onChange={(e) => setDr_price(e.target.checked)} control={<Checkbox />} label="I like the tool but wouldn't pay for it"/>
                            <FormControlLabel checked = {dr_noinvest} onChange={(e) => setDr_noinvest(e.target.checked)} control={<Checkbox />} label="I don't actively invest" />
                            <FormControlLabel checked = {dr_other} onChange={(e) => setDr_other(e.target.checked)} control={<Checkbox />} label="Other" />
                        </FormGroup>
                    </Grid>
                    <Grid item lg={1}></Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sm={3} md={1} lg={2}></Grid>
                        <Grid item xs={10} sm={9} md={10} lg={9}>
                            <Button variant="contained" color="success" size='medium'onClick={()=>{
                                    Log.log(`Feedback: dislike, Accuracy: ${dr_accuracy}, NoTA: ${dr_nota}, Price: ${dr_price}, NoInvest: ${dr_noinvest}, Other: ${dr_other}`)
                                    props.setfeedbackCounter(1)}
                                }>Submit</Button>
                        </Grid>
                </Grid>
            </Box>
        </Box>

:

        <Box textAlign={'center'}>
        <h3>How much are you willing to pay for this service per month?</h3>
        <Box>
            <Grid container>
                <Grid item xs={2.5}></Grid>
                <Grid item xs={7}>
                    <Slider
                        aria-label="Custom marks"
                        // defaultValue={30}
                        value={lr_price}
                        onChange={(e) => setLr_price(e.target.value)}
                        max={100}
                        getAriaValueText={valuetext}
                        step={5}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value)=>'$'+value}
                        marks={marks}
                    />
                </Grid>
                <Grid item xs={2.5}></Grid>
            </Grid>
            <Grid container>
                    <Grid item xs={2} sm={3} md={12} lg={2}></Grid>
                        <Grid item xs={8} sm={5.5} md={10} lg={8}>
                            <Button variant="contained" color="success" size='medium' onClick={()=>{
                                    Log.log(`Feedback: like, Price: ${lr_price}`)
                                    props.setfeedbackCounter(1)
                                }}>Submit</Button>
                        </Grid>
            </Grid>
        </Box>
    </Box>
}
    </ThemeProvider>
  )
}

export default FollowUp