import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Budget from './pages/Budget';
import Pots from './pages/Pots';
import RecurringBills from './pages/RecurringBills';
import Error from './pages/Error.jsx';

// Set up routes with App as the layout
const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, // App acts as the layout
    errorElement: <Error/>,
    children: [
      {
        path: '/', // Default route
        element: <Overview />,
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
      {
        path: '/budget',
        element: <Budget />,
      },
      {
        path: '/pots',
        element: <Pots />,
      },
      {
        path: '/recurring-bills',
        element: <RecurringBills />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
