import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel';


const RadioBox = ({ aList, value, changeFunc, bRow }) => {
 
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row={bRow}
        aria-label="radioBox"
        name="radioBox"
        value={value.toString()}
        onChange={changeFunc} >
        {aList.map((oItem, index) => {
          if (index === 0) return (<FormControlLabel key={index} className="m-0" value={oItem.value.toString()} control={<Radio />} label={oItem.label} required={true} />)
          return (<FormControlLabel key={index} className="m-0" value={oItem.value.toString()} control={<Radio />} label={oItem.label} />)
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioBox;