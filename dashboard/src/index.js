import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { SnackbarContextProvider } from './contexts/snackbar.context';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store'


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarContextProvider>
      <ProSidebarProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ProSidebarProvider>
    </SnackbarContextProvider>
  </React.StrictMode>
);