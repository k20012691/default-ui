import Switch from '@mui/material/Switch';
import { FormControlLabel, ThemeProvider } from '@mui/material';
import { systemTheme } from '../theme';
import PropTypes from 'prop-types'
import '../index.css'

function Toggle({ label }) {
  return (
    <ThemeProvider theme={systemTheme}>
        <FormControlLabel 
            control={<Switch defaultChecked className='toggle' color='primary' />} 
            label={label} 
        />
    </ThemeProvider>
  );
}

Toggle.propTypes = {
    label: PropTypes.string
}

export default Toggle