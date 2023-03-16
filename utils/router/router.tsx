import { createBrowserRouter } from "react-router-dom";
import { WelcomePage } from '../../src/pages/welcome-page/welcome-page'
import { SignUpPage } from "../../src/pages/sign-up-page/sign-up-page"
import { MainPage } from "../../src/pages/main-page/main-page"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage/>
    },
    {
        path: '/auth',
        element: <SignUpPage/>
    },
    {
        path: '/main',
        element: <MainPage/>
    }
])