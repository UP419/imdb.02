import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Movies from "./pages/movies/Movies.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import RegisterPage from "./pages/Register/RegisterPage.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/movies/all",
            element: <Movies/>,
        },
        {
            path: "/login",
            element: <LoginPage/>,
        },
        {
            path: "/register",
            element: <RegisterPage/>,
        },
    ]);

    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
