import { Slider } from "@mui/material";
import { ThemeProvider } from '@mui/material';
import { systemTheme } from '../theme';
import '../index.css'
import PropTypes from 'prop-types'
import { useState } from "react";

function Slide({ width, size, range, steps, hoverValues }) {
  const [value, setValue] = useState([40, 59]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getValue = (value) => {
    if (value[0]) {
        return value[0]
    }
    return value
  }

  return (
    <ThemeProvider theme={systemTheme}>
      <Slider
        value={range ? value : getValue(value)}
        disableSwap
        onChange={handleChange}
        size={size}
        marks={steps}
        step={steps ? 10 : 1}
        valueLabelDisplay={hoverValues ? "auto" : "off"}
        sx={{
          ...(width) ? { width: width } : { width: '100%' },
        }}
      />
    </ThemeProvider>
  );
}

Slide.propTypes = {
  width: PropTypes.number,
  size: PropTypes.oneOf(['small', 'regular']),
  range: PropTypes.bool,
  steps: PropTypes.bool,
  hoverValues: PropTypes.bool,
};

export default Slide;
