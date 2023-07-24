import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Layout from "../Components/Home/Layout/Layout";
import Colleges from "../Components/Colleges/Colleges";
import Admission from "../Components/Admission/Admission";
import MyCollege from "../Components/MyCollege/MyCollege";
import CollegeDetails from "../Components/CollegeDetails/CollegeDetails";
import FullGallery from "../Components/FullGallery/FullGallery";
import Research from "../Components/Research/Research";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdmissionForm from "../Components/Admission/AdmissionForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Layout></Layout>
            },
            {
                path: '/colleges',
                element: <Colleges></Colleges>,
            },
            {
                path: '/admission',
                element: <PrivateRoute><Admission></Admission></PrivateRoute>
            },
            {
                path: '/myCollege',
                element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
            },
            // {
            //     path: '/details',
            //     element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>
            // },
            {
                path: '/gallery',
                element: <FullGallery></FullGallery>
            },
            {
                path: '/research',
                element: <Research></Research>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://college-booking-server-sable.vercel.app/info/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/admissionForm',
                element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>
            }
        ]
    }
])

export default router;