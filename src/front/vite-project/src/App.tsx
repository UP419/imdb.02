import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Movies from "./pages/movies/Movies.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

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
    ]);

  return(
      <>
          <RouterProvider router={router} />
      </>
  )
}

export default App
