import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Blog from './Components/Blog'
import AppliedJobs from './Components/AppliedJobs'
import Statistics from './Components/Statistics'
import JobDetails from './Components/JobDetails'
import ErrorPage from './Components/ErrorPage'
import { jobsAndCartData } from './Loader/getCart&jobsData'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    
   
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('/featuredJob.json')
       
      },
      {
        path: 'featuredJob/:id',
        element: <JobDetails></JobDetails>,
        loader : () => fetch('/featuredJob.json')
       
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobsAndCartData
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>)
