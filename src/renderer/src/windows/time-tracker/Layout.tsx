import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import "./../../styles/styles.scss";

// import Layout from './windows/Layout'
import CustomRoutes from './customRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <CustomRoutes />
    </HashRouter>
  </React.StrictMode>
)
