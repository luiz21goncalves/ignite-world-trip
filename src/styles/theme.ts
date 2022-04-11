import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: {
      500: '#FFBA08',
      100: 'rgba(255,186,8,0.5)',
    },
    dark: {
      900: '#000000',
      700: '#47585B',
      500: '#999999',
      100: 'rgba(153,153,153,0.5)',
    },
    light: {
      900: '#FFFFFF',
      800: '#F5F8FA',
      500: '#DADADA',
    },
  },
  styles: {
    global: {
      bg: 'light.800',
      color: 'dark.700',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});
