import "./LoginPage.css";
import {useState} from "react";

// interface User {
//     username: string;
//     password: string;
// }

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUsername('')
        setPassword('')
        window.location.href = 'movies/all';
    }

    return (
        <div className={"login-form-container"}>
            <form className="login-form" onSubmit={handleLogin}>
                <div>
                    <input
                        placeholder={"Username"}
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <input
                        placeholder={"Password"}
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                    />
                </div>
                <button type="submit" className={"login-button"}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;