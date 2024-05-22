import "./App.css"
import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home/HomePage";

import Header from "./components/header/Header";



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
     </>
 )
  
}

export default App