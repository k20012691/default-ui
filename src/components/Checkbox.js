import { Checkbox } from "@mui/material";
import { FormControlLabel, ThemeProvider } from '@mui/material';
import { systemTheme } from '../theme';
import PropTypes from 'prop-types'
import '../index.css'

function Checkedbox({ label }) {
  return (
    <ThemeProvider theme={systemTheme}>
        <FormControlLabel 
            control={<Checkbox defaultChecked color='primary' />} 
            label={label} 
        />
    </ThemeProvider>
  );
}

Checkedbox.propTypes = {
    label: PropTypes.string
}

export default Checkedbox