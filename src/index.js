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
import { GlobalStyle } from 'globalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/goit-react-hw-08-phonebook/">
              <App />
            </BrowserRouter>
          </PersistGate>
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
// basename="/goit-react-hw-08-phonebook/"
