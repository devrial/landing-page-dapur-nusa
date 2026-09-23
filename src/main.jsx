import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'primereact/resources/themes/lara-light-green/theme.css'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'

import './styles/global.css'
import './styles/sections.css'

// ------------------------------------------------------------
// TEMA DAPUR NUSA
// Menggunakan theme Lara Green dari PrimeReact (MIT) sebagai base,
// lalu di-custom via CSS variables (cream/cokelat) di styles/global.css.
// ------------------------------------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
