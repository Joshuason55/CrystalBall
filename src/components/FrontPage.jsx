
import { Box } from '@mui/system'
import React from 'react'
import FrontLogo from './subcomponents/FrontLogo'
import TransparentPlayButton from './TransparentPlayButton.png'

const FrontPage = (props) => {
  return (
    <Box marginTop={5}>
      <Box className='frontpage'fontSize={{ xs: 22, sm: 26, md: 32 }}>
        <h1>
          Can you out guess the <br/> Crystal Ball Bot?
        </h1>
      </Box>

      <Box textAlign='center'>
        <img className='playbutton'
          src={TransparentPlayButton}
          alt="logo"
          onClick={()=>props.setpageNumber(props.pageNumber+1)}
        />

      </Box>

      <Box className='frontpage' fontSize={{ xs: 17, sm: 20, md: 24 }}>
        <h4>
          Using a machine learning data analysis algorithm, the <br/> Crystal Ball attempts to predict stock prices...<br/> do you think you can beat it?
        </h4>
      </Box>
      
      <FrontLogo/>
      
  </Box>
  )
}


export default FrontPage
