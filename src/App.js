import "./App.css"
import React, { useState} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home/HomePage";
import SinglePage from "./components/watch/singlepage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Loginform from "./components/loginForm/Loginform";



const router= createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/singlepage',
      element: <SinglePage />,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:'/about',
      element:<About/>,
    },
    {
      path: '/login',
      element: < Loginform/>,
    },
    {
      path: '*',
      element: <div>404</div>,
    },
    
  ]
);

function App() {
  return (
    <>
      <Header />
       <RouterProvider router={router}/>
     </>
 )
  
}

export default App