import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './src/router/router'
import { RouterProvider } from 'react-router-dom'
import './src/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
