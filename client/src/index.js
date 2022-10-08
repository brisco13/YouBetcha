import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline"

//main theme colors customization for app
const theme = createTheme({
  palette: {
    primary: {
      main: "#01579b" //dark blue
    },
    secondary: {
      main: "#d32f2f" //orange-red
    },
    info: {
      main: "#CCC" //grey
    },
  },
  typography: {
    pFont: {
      fontSize: "1.5rem"
      
      // color: "#CCC"
    },
    headingFont: {
      fontSize: "2.5rem",
      color: "#01579b",
      fontWeight: "bold",
      align: "center",
      padding: "2.5rem"
      
    }

  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

