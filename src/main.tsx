import React from 'react'
import ReactDOM from 'react-dom/client'
import Test from './Test';
import {
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/',
    element: <App />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
