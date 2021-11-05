import Admin from "./pages/Admin"
import CinemasPage from "./pages/CinemasPage"
import Auth from "./pages/Auth"
import MainPage from "./pages/MainPage"


import { CINEMAS_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE} from "./utils/const"
 
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CINEMAS_ROUTE,
        Component: CinemasPage
    },
    {
        path: CINEMAS_ROUTE + '/:id',
        Component: CinemasPage
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

]

