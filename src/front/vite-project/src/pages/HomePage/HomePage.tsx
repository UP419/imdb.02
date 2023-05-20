import "./HomePage.css";
import Navbar from "../Navbar/Navbar.tsx";

const HomePage = () => {
    return (
        <div className={"homepage-container"}>
            <Navbar/>
            <a href={`/movies/all`}>Movies</a>
            <h1>Welcome to Home Page!</h1>
        </div>
    )
}

export default HomePage;