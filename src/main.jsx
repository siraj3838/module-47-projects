import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrrorPage from './components/ErrorPage/ErrrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Jobs from './components/Jobs/Jobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrrorPage></ErrrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: ()=>fetch('jobs.json')
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dummyjson.com/products')
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>,
        loader: () => fetch('joblist.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
