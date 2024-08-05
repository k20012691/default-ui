import { createTheme } from "@mui/material";

export const systemTheme = createTheme({
    palette: {
        primary: {
            main: '#0fa3b1',
            contrastText: '#fff'
        },
        secondary: {
            main: '#ade8f4',
            hover: '#90e0ef',
            contrastText: '#003566'
        },
        destructive: {
            main: '#ae2012',
            hover: '#9b2226',
            contrastText: '#fff'
        }
    },
    typography: {
        fontFamily: 'Inter'
    },
    components: {
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    height: '18px',
                    width: '18px',
                    backgroundColor: '#fff',
                    border: '#0fa3b1 2px solid'
                },
                valueLabel: {
                    top: '45px',
                    color: '#000',
                    background: 'none'
                },
                valueLabelOpen: {
                    background: 'none',
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: '6px',
                    borderRadius: '6px',
                },
                bar: {
                    height: '6px',
                    borderRadius: '6px'
                }
            }
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    strokeLinecap: 'round',
                }
            }
        },
    }
})