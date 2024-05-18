import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tracker from './routes/Tracker'
import Log from './routes/Log'
import Scan from './routes/Scan.jsx';

const router = createBrowserRouter([
  {
    path: "/TheLorissesFrontEnd",
    element: <App />,
    children: [
      {
        path: "/TheLorissesFrontEnd/log",
        element: <Log />,
      },
      {
        path: "/TheLorissesFrontEnd/tracker",
        element: <Tracker />,
      },
      {
        path: "/TheLorissesFrontEnd/scan",
        element: <Scan />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
