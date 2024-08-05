import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { systemTheme } from '../theme';
import { ThemeProvider } from '@mui/material';

function ContainedButton({ label, size, style, disabled }) {
    return (
        <ThemeProvider theme={systemTheme}>
            <Button 
                variant='contained'
                size={size}
                color={style}
                disableElevation
                disabled={disabled}
                endIcon={<SendIcon />}
                sx={{
                    textTransform: 'unset',
                    border: '2px solid white',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: `${style}.hover`,
                        borderColor: `${style}.contrastText`,
                        transition: '0.2s ease-in-out'
                    }
                }}
            >
                {label}
            </Button>
        </ThemeProvider>
    )
}

ContainedButton.propTypes = {
    label: PropTypes.string,
    style: PropTypes.oneOf(['primary', 'secondary', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default ContainedButton