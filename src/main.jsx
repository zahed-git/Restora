import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Component/Error/ErrorPage.jsx';
import Home from './Component/Home/Home.jsx';
import AuthProvider from './Routs/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import LoggedIn from './Component/UsersLogInOut/LoggedIn.jsx';
import LoggedUp from './Component/UsersLogInOut/LoggedUp.jsx';
import AddFoods from './Component/AddFoods/AddFoods.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sinin",
        element: <LoggedIn />,
      },
      {
        path: "/sinup",
        element: <LoggedUp />,
      },
      {
        path: "/addfoods",
        element: <AddFoods />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <Toaster></Toaster>
  
  </React.StrictMode>,
)
