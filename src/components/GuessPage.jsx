import { CheckCircle } from '@mui/icons-material'
import { Box, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import DataFetching from './subcomponents/DataFetching'
import PageLogo from './subcomponents/PageLogo'


const GuessPage  = (props) => {
  return (
    <div>
      {/* 1 */}
      <Grid marginTop={3} container spacing ={2}>
        <Grid item xs={0} sm={0} md={1.5} lg={2.5} xl={3.25}></Grid>

          <Grid item xs={5} sm={5} md={4} lg={3} xl={2.5}>
            <Grid container direction='column'fontSize={{ xs: 14, sm: 17, md: 20, lg:20.5, xl:20.5 }}>
              <h1> Crystal Ball Test</h1>
              <h4>Guess the Stock Price in 20 Days</h4>
            </Grid>
          </Grid>

          <Grid item xs={1} sm={0}></Grid>

          <Grid item xs={5} sm={5} md={4} lg={3} xl={2.5} textAlign='center' >
            <PageLogo/>  
          </Grid>

        

        <Grid item xs={0} sm={2} md={2.5} lg={3} xl={3.25}>
        </Grid>
      </Grid>


    {/* format datafetching centered */}
    
    <DataFetching date={props.date} stock={props.stock} show={false}/>

<Grid item xs={6}></Grid>
  <Grid item xs={6}>
      {/* 3 */}
  <Box marginTop={1} className='frontPage' vertical-align='baseline' textAlign='center'>
    <Box className='btn'>
      <TextField
              label="Guess the 20D Stock Price"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '45ch' }}
              type='number'
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
        <IconButton aria-label="Check Button" alignItems='center'>
          <CheckCircle sx={{fontSize:'200%'}} htmlColor={'green'}/>
        </IconButton>
      </Box>
  </Box>

  </Grid>
    </div>
  )
}

export default GuessPage