import { Box, Button, Checkbox, createTheme, FormControlLabel, FormGroup, Grid,  Slider,  ThemeProvider } from '@mui/material';
import React from 'react'

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
      value: 50,
      label: '$50',
    },
  ];

function valuetext(value) {
    return `$${value}`;
  }




const FollowUp = (props) => {
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
                            <FormControlLabel control={<Checkbox />} label="I was more accurate" />
                            <FormControlLabel control={<Checkbox />} label="I don't use technical analysis for stock prediction" />
                            <FormControlLabel control={<Checkbox />} label="I like the tool but wouldn't pay for it"/>
                            <FormControlLabel control={<Checkbox />} label="I don't actively invest" />
                            <FormControlLabel control={<Checkbox />} label="Other" />
                        </FormGroup>
                    </Grid>
                    <Grid item lg={1}></Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sm={3} md={1} lg={2}></Grid>
                        <Grid item xs={10} sm={9} md={10} lg={9}>
                            <Button variant="contained" color="success" size='medium'onClick={()=>props.setfeedbackCounter(1)}>Submit</Button>
                        </Grid>
                </Grid>
            </Box>
        </Box>

:

        <Box textAlign={'center'}>
        <h3>How much are you willing to pay for this service per week?</h3>
        <Box>
            <Grid container>
                <Grid item xs={2.5}></Grid>
                <Grid item xs={7}>
                    <Slider
                        aria-label="Custom marks"
                        defaultValue={20}
                        max={50}
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
                            <Button variant="contained" color="success" size='medium' onClick={()=>props.setfeedbackCounter(1)}>Submit</Button>
                        </Grid>
            </Grid>
        </Box>
    </Box>
}
    </ThemeProvider>
  )
}

export default FollowUp