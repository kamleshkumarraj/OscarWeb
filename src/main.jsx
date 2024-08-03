import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'

// here we write code for basic routing.
const router = createBrowserRouter([{
  path : '/',
  element : <App />,
  errorElement : <Error />,
  children : [{
    path :'/',
    element : <Home />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
