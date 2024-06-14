import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles/styles.scss";

import Layout from './views/Layout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
)
