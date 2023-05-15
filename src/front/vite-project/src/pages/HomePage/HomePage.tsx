import "./HomePage.css";

const HomePage = () => {
    return (
        <div className={"homepage-container"}>
            <a href={`/movies/all`}>Movies</a>
            <h1>Welcome to Home Page!</h1>
        </div>
    )
}

export default HomePage;