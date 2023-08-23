import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LoadingProvider } from './Context/LoadingContext.tsx'
import {Router} from './Pages/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingProvider>
    <Router />
    </LoadingProvider>  
  </React.StrictMode>,
)
