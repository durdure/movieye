import "./App.css"
import React, { useS} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home/HomePage";
import Home from "./components/Homes/Homes";
import Header from "./components/header/Header";
import UpComming from "./components/upComing/UpComming";

const router= createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: "./upComing",
      element: <UpComming/>
    }
  ]
);

function App() {
  return (
    <div>
      <Header />
       <RouterProvider router={router}/>
    </div>
 )
  
}

export default App