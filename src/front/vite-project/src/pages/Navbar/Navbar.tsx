import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <a href={'/login'}>login</a>
                <a href={'/register'}>Register</a>
            </div>
        </nav>
    );
}

export default Navbar;