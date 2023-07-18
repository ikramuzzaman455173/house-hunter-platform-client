import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import HomePage from '../Pages/Home/HomePage'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Register/Register'
import ErrorPage from '../Components/SharedComponents/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
      path: '/',
      element:<HomePage/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/signUp',
        element:<SignUp/>
      },
    ],
  },
  // {
  //   path: '/dashboard',
  //   element:<PrivateRoute><DashboardLayout /></PrivateRoute>,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: 'select-classes',
  //       element:<StudentRoute><SelectClasses/></StudentRoute>
  //     },
  //     {
  //       path: 'enrolled-classes',
  //       element:<StudentRoute><EnrolledClasses/></StudentRoute>
  //     },
  //     {
  //       path: 'payment',
  //       element:<StudentRoute><Payment/></StudentRoute>
  //     },
  //     {
  //       path: 'payment-history',
  //       element:<StudentRoute><PaymentHistoryPage/></StudentRoute>
  //     },
  //     {
  //       path: 'add-class',
  //       element:<InstructorRoute><InstructorAddClass/></InstructorRoute>
  //     },
  //     {
  //       path: 'my-class',
  //       element:<InstructorRoute><InstructorMyClasses/></InstructorRoute>
  //     },
  //     {
  //       path: 'instructorClassUpdate/:id',
  //       element:<InstructorRoute><InstructorClassUpdate /></InstructorRoute>,
  //       loader: ({ params }) => fetch(`https://summer-camp-school-server-two.vercel.app/allClass/${params.id}`)
  //     },
  //     {
  //       path: 'manage-classes',
  //       element:<AdminRoute><ManageClasses/></AdminRoute>
  //     },
  //     {
  //       path: 'manage-users',
  //       element: <AdminRoute><ManageUsers /></AdminRoute>,
  //     },
  //     {
  //       path: 'class-feedback/:id',
  //       element: <AdminRoute><InstructorClassFeedback /></AdminRoute>,
  //       loader: ({ params }) => fetch(`https://summer-camp-school-server-two.vercel.app/allClass/${params.id}`)
  //     }
  //   ]
  // }
])
