import React from 'react';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';

import Statistics from './pages/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';

import { ToastContainer } from 'react-toastify';
import { JobContextProvider } from './contexts/jobContext';
import AppliedJob from './pages/AppliedJob/AppliedJob';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />,
    children : [
      {
        path: '/',
        element: <Statistics />
      },
      {
        path: '/applied-job',
        element: <AppliedJob />
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />
      }
    ]
  },
  {
    path: '*',
    element: <div><h2>This page is not available, Please Enter your right path!</h2></div>
  }
])

const App = () => {
  return (
    <JobContextProvider>
      <ToastContainer className='toast' style={{ fontSize: "16px"}}/>
      <RouterProvider router={router}></RouterProvider>
    </JobContextProvider>
  );
};

export default App;