import '@fontsource/inter/500.css';
import '@fontsource/inter/400.css';
import { ThemeProvider } from '@mui/material';
import { systemTheme } from '../src/theme';

// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };


// export default preview;

export default {
  decorators: [
    (Story) => (
      <ThemeProvider theme={systemTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
}