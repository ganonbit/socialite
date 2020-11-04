import ReactDOM from 'react-dom';
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web';
import { ChakraProvider } from '@chakra-ui/core';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';
import customTheme from 'src/theme';

Sentry.init({
  dsn: process.env.SENTRY_TOKEN,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

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
