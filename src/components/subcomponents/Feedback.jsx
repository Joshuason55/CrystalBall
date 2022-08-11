import { HighlightOff, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { Box, createTheme, ThemeProvider} from '@mui/material'
import React, { useState }  from 'react'
import FollowUp from './FollowUp';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';


const theme = createTheme({
    typography: {
        fontFamily: 
        [
            "bahnschrift"
        ].join(",")
    }
});

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));
  
  const customIcons = {
    1: {
      icon: <ThumbUpOutlined color="success" />,
      label: 'Thumbs up',
    },
    2: {
      icon: <ThumbDownOutlined color="error" />,
      label: 'Thumbs Down',
    },
    3:{
      icon:<HighlightOff color='primary'/>,
      label: 'closer',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };


const Feedback = (props) => {
    const [currentValue, setCurrentValue]=useState(0);
    return (
    <ThemeProvider theme = {theme}>
        <Box textAlign={'center'} marginTop={1} marginBottom={2} display='flex' justifyContent='center' alignItems='center'>
            <h3>Would you use the Crystal Ball? &nbsp;&nbsp;&nbsp;</h3>

            <StyledRating
              name="highlight-selected-only"
              max={3}
              defaultValue={0}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
              onChange={(event,newValue)=>{
                setCurrentValue(newValue);
                if (newValue===3){
                  props.feedbackReceivedCallback(true)
                }
                console.log(newValue)
              }}
            />

        </Box>

        <FollowUp showDetail={currentValue} feedbackReceivedCallBack={props.feedbackReceivedCallBack}/>
        
    </ThemeProvider>
  )
}

export default Feedback            

// //code for the bold and unbold thumbs up and thumbs down
// {/* <IconButton aria-label="Thumbs up">
// <Checkbox icon={<ThumbUpOutlined sx={{color:"green", fontSize:'30px'}} />} checkedIcon={<ThumbUp sx={{color:"green", fontSize:'30px'}}/>} />
// </IconButton>
// <IconButton aria-label="Thumbs Down">
// <Checkbox icon={<ThumbDownOutlined sx={{color:"red", fontSize:'30px'}}/>} checkedIcon={<ThumbDown sx={{color:"red", fontSize:'30px'}}/>} />
// </IconButton> */}