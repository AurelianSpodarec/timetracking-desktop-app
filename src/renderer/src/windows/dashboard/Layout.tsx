import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import "./../../styles/styles.scss";

import RootLayout from './pages/Layout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
     <RootLayout />
    </HashRouter>
  </React.StrictMode>
)
