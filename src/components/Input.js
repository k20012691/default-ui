import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import PropTypes from 'prop-types';
import { systemTheme } from '../theme';
import { ThemeProvider } from '@mui/material';
import { ContentCopy, Visibility, VisibilityOff } from "@mui/icons-material";
import '../index.css'

function Input ({ label, width, multiline, password }) {
    return (
        <ThemeProvider theme={systemTheme}>
            <FormControl sx={{ m: 1, width: {width} }} variant="outlined">
                <InputLabel>{label}</InputLabel>
            <OutlinedInput
                multiline={multiline}
                endAdornment={!multiline ? 
                    <InputAdornment position="end">
                        {password ? 
                            <IconButton
                            edge="end"
                            >
                            <VisibilityOff />
                            </IconButton>
                            : <></>
                        }
                        <IconButton
                        edge="end"
                        >
                        <ContentCopy />
                        </IconButton>
                    </InputAdornment>
                    : <></>
                    }
                rows={4}
                label={label}
            />
            </FormControl>
        </ThemeProvider>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    width: PropTypes.number,
    multiline: PropTypes.bool,
    password: PropTypes.bool,
}

export default Input