import { extendTheme } from '@chakra-ui/core';
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

export default customTheme;
