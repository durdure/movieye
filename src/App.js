import "./App.css"
import React, { useState} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home/HomePage";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";



const router= createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    }
  ]
);

function App() {
  return (
    <>
      <Header />
       <RouterProvider router={router}/>
      <Footer/>
     </>
 )
  
}

export default App