import "./LoginPage.css";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

// interface User {
//     username: string;
//     password: string;
// }

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUsername('')
        setPassword('')
        navigate('/movies/all');
    }

    return (
        <div className={"login-form-container"}>
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    placeholder={"Username"}
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={true}
                />
                <input
                    placeholder={"Password"}
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                />
                <button type="submit" className={"login-button"}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;