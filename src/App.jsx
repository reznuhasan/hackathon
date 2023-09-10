import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Register from './components/Register'
import Login from './components/Login'
import Order from './components/Order'
import Education from './components/Education'
import Home from './components/Home'
import Forecasts from './components/Forecasts'
import Agriculture from './Layout/Agriculture'
import ErrorPage from './components/ErrorPage'
import Soil from './components/Soil'
import Crops from './components/Crops'
import CourseDetails from './components/CourseDetails'
import PrivateRoute from './components/PrivateRoute'
import JobPortal from './components/JobPortal'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorElement:<ErrorPage/>,
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
          path:"/course-details",
          element:<CourseDetails/>
        },
        {
          path:"/job-portal",
          element:<JobPortal/>
        },
        {
          path:"/agriculture",
          element:<Agriculture/>,
          children:[
            {
              path:"",
              element:<Forecasts/>
          },
          {
            path:"soil",
            element:<Soil/>
          },{
            path:"crops",
            element:<Crops/>
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
