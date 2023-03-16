import { createBrowserRouter } from "react-router-dom";
import { WelcomePage } from '../../src/pages/welcome-page/welcome-page'
import { LoginPage } from "../../src/pages/login-page/login-page"
import { MainPage } from "../../src/pages/main-page/main-page"
import { PrivatePage } from "../../src/pages/private-page/private-page";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage/>
    },

    {
        path: '/login',
        element: <LoginPage/>,
    },

    {
        path:'',
        element: <PrivatePage/>,
        children: [
            {
                path:'/main',
                element: <MainPage/>
            }
        ]
    }

])