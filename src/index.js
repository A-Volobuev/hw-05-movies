import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/hw-05-movies">
      {/* <ThemeProvider theme={theme}> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
