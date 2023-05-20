import {useState} from "react";
import "./Register.css"
import {useNavigate} from 'react-router-dom';


// interface User {
//     username: string;
//     password: string;
// }

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [incorrectPasswords, setIncorrectPasswords] = useState(false)
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        const passNotMatched = password !== repeatedPassword;
        e.preventDefault();
        setIncorrectPasswords(passNotMatched);
        if (!passNotMatched) {
            navigate('/movies/all');
        } else {
            setUsername('')
            setPassword('')
            setRepeatedPassword('')
        }
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
                <input
                    placeholder={"Repeat Password"}
                    type="password"
                    id="repeatedPassword"
                    value={repeatedPassword}
                    onChange={(e) => setRepeatedPassword(e.target.value)}
                    required={true}
                />
                {incorrectPasswords && <h2 className={"errorMessage"}>Passwords do not match</h2>}
                <button type="submit" className={"login-button"}>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage;