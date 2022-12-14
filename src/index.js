import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

import { PersistGate } from 'redux-persist/integration/react';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import { BaseStyle } from 'globalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </ChakraProvider>
      </ThemeProvider>
      <BaseStyle />
    </Provider>
  </React.StrictMode>
);
// basename="/goit-react-hw-08-phonebook/"
