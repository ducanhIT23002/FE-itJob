import LayoutDefault from "../../pages/client/playout-default";
import Home from "../../pages/client/home"
import Search from "../../pages/client/search";
import Detail from "../../pages/client/detail"
import PrivateRouter from "../../PrivateRouter/client/index"
import Register from "../../pages/client/register/index"
import Login from "../../pages/client/login/index"
// import CheckCookie from "../../PrivateRouter/client/logicAuth"
import AdminPlayout from "../../pages/amin/playoutDefaultAmin"
import General from "../../pages/amin/general/index"
import ManageCV from "../../pages/amin/detailCV";
import JobManage from "../../pages/amin/jobManage"
import InfoCompany from "../../pages/amin/infoCompany";
import CreateJob from "../../pages/amin/jobManage/createdJob"
import DetailCompany from "../../pages/client/company/companyDetail";
import DetailJob from "../../pages/amin/jobManage/detailJob";
import ItemCv from "../../pages/amin/detailCV/ItemDetailCV";
import { Navigate } from "react-router-dom";
export const Routers = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />

            },
            {
                path: "company/:id",
                element: <DetailCompany />
            },
            {
                path: "*",
                element: <Navigate to="/" />
            },
            {
                element: <PrivateRouter />,
                children: [
                    {
                        path: "detail/:id",
                        element: <Detail />
                    },
                ]
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminPlayout />,
        children: [
            {
                index: true,
                element: <General />
            },
            {
                path: "info-company",
                element: <InfoCompany />
            },
            {
                path: "job-manage",
                element: <JobManage />
            },
            {
                path: "manage-cv",
                element: <ManageCV />
            },
            {
                path: "create-job",
                element: <CreateJob />
            },
            {
                path: "detail-job/:id",
                element: <DetailJob />
            },
            {
                path: "detailCV/:id",
                element: <ItemCv />
            },
        ]
    }
]
