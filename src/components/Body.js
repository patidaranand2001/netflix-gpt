import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
function Body() {
   
const appRouter =createBrowserRouter([
    {
        path: "/",
        element : <Login/>,
    },
    {
        path:"/Browse",
        element:<Browse/>,
    },
]);

  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
