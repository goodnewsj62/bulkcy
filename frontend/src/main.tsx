import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import store from 'store';


const theme =  createTheme({
  palette:{
    primary:{
      main:"#8973EF"
    },
    secondary:{
      main:"#272D2D"
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store} >
        <App />
      </ Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
