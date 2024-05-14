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
import Available from './Component/Available/Available.jsx';
import UpdateFoods from './Component/UpdateFoods/UpdateFoods.jsx';
import Detail from './Component/Detail/Detail.jsx';
import Mylist from './Component/MyList/Mylist.jsx';
import Private from './Routs/Private.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:  ()=>fetch('https://practiceserver-11.onrender.com/foods')
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
        element:<Private> <AddFoods /></Private>,
        loader:  ()=>fetch('https://practiceserver-11.onrender.com/user')
      },
      {
        path: "/update/:_id",
        element:<Private> <UpdateFoods /></Private>,
        loader: ( {params})=> fetch(`https://practiceserver-11.onrender.com/foods/${params._id}`)
      },
      {
        path: "/availablefoods",
        element: <Available />,
        loader:  ()=>fetch('https://practiceserver-11.onrender.com/foods')
      },
      {
        path: "/detail/:_id",
        element: <Detail />,
        loader: ({params})=> fetch(`https://practiceserver-11.onrender.com/foods/${params._id}`)
      },
      {
        path: "/mylist",
        element:<Private> <Mylist /></Private>,
        loader: ()=> fetch('https://practiceserver-11.onrender.com/foods')
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
