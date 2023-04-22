import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root, { rootLoader } from './routes/root';

// Load data from any one of our button clicks
import buttonLoader from './components/buttonLoader';
import RoadMapPath from './components/buttonLoader';

// Best way to organizefilesystem based on this routing method
// Dockerize this React app
// Create RoadMapPath component
// Code up buttonLoader function

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: 'roadmap',
        element: <RoadMapPath />,
        loader: buttonLoader,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
