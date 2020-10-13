/* eslint-disable no-unused-vars */
import React from 'react';
import Loader from 'react-loader-spinner'
import Box from '@material-ui/core/Box';
// import Fade from '@material-ui/core/Fade';
// import WRlogo from '../WRLogo'

import './WRLoader.scss'

const WRLoader = () => {
  const checked = React.useState(false);

  return(
    <div 
      className="wr-logo-container"  
    >
    <Box>
    {props => 
    <Loader
      {...props}
      className="loader-dots"
      type="Grid"
      color="#ff8200"
      width={40}
      timeout={3000}
      />
    }
      </Box>
  
    </div>
     );
    }

export default WRLoader;


