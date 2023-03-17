import { createBrowserRouter } from "react-router-dom";
import { WelcomePage } from '../../src/pages/welcome-page/welcome-page'
import { AuthPage } from "../../src/pages/auth-page/auth-page"
import { MainPage } from "../../src/pages/main-page/main-page"
import { PrivatePage } from "../../src/pages/private-page/private-page";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <WelcomePage/>
        },

        {
            path: '/auth',
            element: <AuthPage/>,
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
    ]
)