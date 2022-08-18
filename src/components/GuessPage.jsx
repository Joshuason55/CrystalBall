import { CheckCircle } from '@mui/icons-material'
import { Box, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import PageLogo from './subcomponents/PageLogo'
import Loading from './Loading.gif'

const GuessPage  = (props) => {
  const[input,setInput]=useState(props.input)
  


  return (
    <div>
      {/* 1 */}
      <Grid marginTop={3} container spacing ={2}>
        <Grid item xs={0} sm={0} md={1.5} lg={2.5} xl={3.25}></Grid>

          <Grid item xs={5} sm={5} md={4} lg={3} xl={2.5}>
            <Grid container direction='column'fontSize={{ xs: 14, sm: 17, md: 20, lg:20.5, xl:20.5 }}>
              <h1> Crystal Ball Test</h1>
              <h4>Guess the Stock Price in 10 Days</h4>
            </Grid>
          </Grid>

          <Grid item xs={1} sm={0}></Grid>

          <Grid item xs={5} sm={5} md={4} lg={3} xl={2.5} textAlign='center' >
            <PageLogo/>  
          </Grid>

        

        <Grid item xs={0} sm={2} md={2.5} lg={3} xl={3.25}>
        </Grid>
      </Grid>


    {props.loading ?(
      <img className="stockimage"
          src={props.anonymousImg}
          alt=''
        />
      )
      
      :
      <img className='loadingimage'
        src={Loading}
        alt='Loading...'
      />
      }


<Grid item xs={6}></Grid>
  <Grid item xs={6}>
      {/* 3 */}
  <Box marginTop={1} className='frontPage' vertical-align='baseline' textAlign='center'>
    <Box className='btn'>
      <TextField
              label="Guess the 10D Stock Price"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '45ch' }}
              type='number'
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              onChange={(event)=> setInput(event.target.value)}
              value={input}
            />
        <IconButton onClick={()=> { props.setnumAttempts(props.numAttempts+1); props.setInput(input); props.setpageNumber(props.pageNumber+1);}}
          aria-label="Check Button" alignItems='center'>
          <CheckCircle sx={{fontSize:'200%'}} htmlColor={'green'} />
        </IconButton>
          
      </Box>
  </Box>

  </Grid>
    </div>
  )
}

export default GuessPage