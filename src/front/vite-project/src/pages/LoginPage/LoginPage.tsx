import "./LoginPage.css"
import {useState} from "react";

const LoginPage = () => {
    const [username, setUserame] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUserame('')
        setPassword('')
    }

    return (
        <form className = "login-container" onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">UserName: </label>
                <input className="login-form"
                    type = "text"
                    id="username"
                    value={username}
                    onChange={(e) => setUserame(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    type = "text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage;