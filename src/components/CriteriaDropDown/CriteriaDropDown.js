import React from 'react';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';


const CriteriaDropDown = () => {
    const [value, setValue] = React.useState('');  
    const handleChange = event => {   
      setValue(event.target.value);
    };

    return(
      <div 
        className='classes.root'
      >
        <FormControl 
          component="fieldset" 
          className="form-control"
        >
          <RadioGroup 
            aria-label="" 
            name="" 
            value={value} 
            onChange={handleChange}
          >
            <FormControlLabel 
              value="StartingWith" 
              control={<Radio />} 
              label="Starting Width" 
            />
            <FormControlLabel 
              value="Containing" 
              control={<Radio />} 
              label="Containing" 
            />
            <FormControlLabel 
              value="EndingWidth" 
              control={<Radio />} 
              label="Ending Width" 
            />
            </RadioGroup>
        </FormControl>
      </div>   
    )
}

export default CriteriaDropDown;