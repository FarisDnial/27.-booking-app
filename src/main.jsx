import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from "@material-tailwind/react";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
