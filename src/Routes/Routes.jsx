import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Layout from "../Components/Home/Layout/Layout";
import Colleges from "../Components/Colleges/Colleges";
import Admission from "../Components/Admission/Admission";
import MyCollege from "../Components/MyCollege/MyCollege";
import CollegeDetails from "../Components/CollegeDetails/CollegeDetails";
import FullGallery from "../Components/FullGallery/FullGallery";
import Research from "../Components/Research/Research";

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
                element: <Admission></Admission>
            },
            {
                path: '/myCollege',
                element: <MyCollege></MyCollege>
            },
            {
                path: '/details',
                element: <CollegeDetails></CollegeDetails>
            },
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
                element: <CollegeDetails></CollegeDetails>
            }
        ]
    }
])

export default router;