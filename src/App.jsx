import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Register from './components/Register'
import Login from './components/Login'
import Order from './components/Order'
import Education from './components/Education'
import Home from './components/Home'
import Forecasts from './components/Forecasts'
import Agriculture from './Layout/Agriculture'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/education",
          element:<Education/>,
        },
        {
          path:"/agriculture",
          element:<Agriculture/>,
          children:[
            {
              path:"weather",
              element:<Forecasts/>
          }
          ]
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
