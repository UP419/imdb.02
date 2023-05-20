import {useState} from "react";
import "./RegisterPage.css"

// interface User {
//     username: string;
//     password: string;
// }

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [incorrectPasswords, setIncorrectPasswords] = useState(false)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isIncorrectPasswords = password != repeatedPassword
        setIncorrectPasswords(isIncorrectPasswords);
        if(!isIncorrectPasswords){
            window.location.href = 'movies/all';
        }else {
            setUsername('')
            setPassword('')
            setRepeatedPassword('')
        }
    }

    return (
        <div className={"login-form-container"}>
            <form className="login-form" onSubmit={handleLogin}>
                    <input className="input-form"
                        placeholder={"Username"}
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required={true}
                    />
                    <input className="input-form"
                        placeholder={"Password"}
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                    />
                    <input className="input-form"
                        placeholder={"Repeat Password"}
                        type="text"
                        id="repeatedPassword"
                        value={repeatedPassword}
                        onChange={(e) => setRepeatedPassword(e.target.value)}
                        required={true}
                    />
                    {incorrectPasswords && <h2>Passwords do not match</h2>}
                <button type="submit" className={"login-button"}>Login</button>
            </form>
        </div>
    )
}

export default RegisterPage;