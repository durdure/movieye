import "./App.css"
import React, { useS} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home/HomePage";
import Contact from "./components/contact/Contact";
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
      <Contact/>
     </>
 )
  
}

export default App