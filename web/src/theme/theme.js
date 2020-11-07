import { extendTheme } from '@chakra-ui/core';
import { tailwind } from '@theme-ui/presets';
const config = {
  ...tailwind,
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

export default customTheme;
