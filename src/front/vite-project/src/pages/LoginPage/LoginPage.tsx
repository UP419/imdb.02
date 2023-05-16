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
        <div className={"login-form-container"}>
            <form className="login-form" onSubmit={handleLogin}>
                <div>
                    <input
                        placeholder={"Username"}
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUserame(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder={"Password"}
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className={"login-button"}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;