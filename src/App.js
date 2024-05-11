import "./App.css"
import React, { useS} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home/HomePage";
import Home from "./components/Homes/Homes";
import Header from "./components/header/Header";
import UpComming from "./components/upComing/UpComming";
import SinglePage from "./components/watch/singlepage";

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