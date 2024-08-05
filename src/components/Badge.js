import { Chip } from "@mui/material";
import PropTypes from 'prop-types';
import { systemTheme } from '../theme';
import { ThemeProvider } from '@mui/material';

function Badge ({ label, variant, size, rounded }) {
    return (
        <ThemeProvider theme={systemTheme}>
            <Chip
                label={label}
                variant={variant}
                size={size}
                sx={{ 
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    ...(size ? { fontSize: '12px' } : { fontSize: '20px' }),
                    ...(rounded ? { borderRadius: '16px' } : { borderRadius: '7px' })
                 }}
            />
        </ThemeProvider>
    )
}

Badge.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined']),
    size: PropTypes.oneOf(['regular', 'small']),
    rounded: PropTypes.bool
}

export default Badge