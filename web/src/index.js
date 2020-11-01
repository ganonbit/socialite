import ReactDOM from 'react-dom';
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web';
import { ChakraProvider } from '@chakra-ui/core';
import FatalErrorPage from 'src/pages/FatalErrorPage';

import Routes from 'src/Routes';

import customTheme from 'src/theme';

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <ChakraProvider theme={customTheme}>
        <Routes />
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
);
