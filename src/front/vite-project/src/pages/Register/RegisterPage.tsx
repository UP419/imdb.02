import {useState} from "react";
import "./Register.css"

// interface User {
//     username: string;
//     password: string;
// }

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [incorrectPasswords, setIncorrectPasswords] = useState(false)
    const [renderPage, setRenderPage] = useState(false)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIncorrectPasswords(password != repeatedPassword);
        if(incorrectPasswords){
            window.location.href = 'movies/all';
        }else {
            setUsername('')
            setPassword('')
            setRepeatedPassword('')
            setRenderPage(!renderPage)
        }
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
                <div>
                    <input
                        placeholder={"Repeat Password"}
                        type="text"
                        id="repeatedPassword"
                        value={repeatedPassword}
                        onChange={(e) => setRepeatedPassword(e.target.value)}
                        required={true}
                    />
                </div>
                <h2>{ incorrectPasswords && "Passwords do not match"}</h2>
                <button type="submit" className={"login-button"}>Login</button>
            </form>
        </div>
    )
}

export default RegisterPage;