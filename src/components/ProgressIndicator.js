import { LinearProgress, ThemeProvider, CircularProgress, Box, Typography } from "@mui/material";
import { systemTheme } from "../theme";
import PropTypes from 'prop-types'
import { useState, useEffect } from "react";

function LinearProgressIndicator({ label }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
            return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);

    return (
        <ThemeProvider theme={systemTheme}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <LinearProgress variant="determinate" value={progress} sx={{ width: '400px' }} />
                {label ? <Typography>{Math.floor(progress)}%</Typography> : <></>}
            </Box>
        </ThemeProvider>
    )
}

LinearProgressIndicator.propTypes = {
    label: PropTypes.bool
}

export default LinearProgressIndicator;

export function CircularProgressIndicator({ label }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
            return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);

    return (
        <ThemeProvider theme={systemTheme}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress 
                    variant="determinate" 
                    id="loader"
                    value={progress} 
                    size={80}
                    sx={{ 
                        fontWeight: 500
                    }}
                />
                <CircularProgress 
                    variant="determinate" 
                    value={100} 
                    size={80} 
                    sx={{ position: 'absolute', color: '#ade8f4', zIndex: '-1' }} 
                    />
                {label ?
                <Box sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Typography sx={{ fontWeight: 500 }}>{Math.floor(progress)}%</Typography>
                </Box>
                :
                <></>
                }
            </Box>
        </ThemeProvider>
    )
}