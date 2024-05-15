import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Home from "../pages/site/home/Home";
import Shop from "../pages/site/shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [{
    path: "/",
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    }, {
        path: "shop",
        element: <Shop />
    }]
}, {
    path: '/admin',
    element: <AdminRoot />,
    children: [{
        path: '',
        element: <Dashboard />
    }]
}
]

export default ROUTES