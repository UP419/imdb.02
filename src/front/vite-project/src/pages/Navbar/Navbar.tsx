import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
                <a href={'/login'}>login</a>
                <a href={'/register'}>Register</a>
        </nav>
    );
}

export default Navbar;