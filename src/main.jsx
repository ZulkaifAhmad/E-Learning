import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Layout from "./components/outlits/Layout.jsx"
import Home from './components/Home.jsx'
import Careers from './components/Careers.jsx'
import Courses from './components/Courses.jsx'
import Blog from './components/Blog.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Courses_detail from './components/Courses_detail.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path : "/" ,
    element : <Layout />,
    children : [
      {
        path : "" , 
        element : <Home />
      } , 
      {
        path : "/about" , 
        element : <About />
      },
      {
        path : "/careers" , 
        element : <Careers />
      },
      {
        path : "/courses" , 
        element : <Courses />
      },
      {
        path : "/courses/:id" , 
        element : <Courses_detail />
      },
      {
        path : "/blog" , 
        element : <Blog />
      },
      {
        path : "/signup" , 
        element : <Signup />
      },
      {
        path : "/login" , 
        element : <Login />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
