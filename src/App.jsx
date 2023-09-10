import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Layout from './Layout/Layout'
import Register from './components/Register'
import Login from './components/Login'
import Order from './components/Order'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:'/order',
          element:<Order/>
        }
      ]
    }
  ])
  return (
    
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
