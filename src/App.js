import "./App.css";
import React, { useState } from "react";

import Form from "./components/Form";
import UserInformation from "./components/UserInformation";
import Footer from "./components/Footer";

const App = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [createAccount, setCreateAccount] = useState(1);

    return (
        <>
            <div className="app-container">
                {createAccount === 1 ? (
                    <Form
                        username={username}
                        setUsername={setUsername}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        passwordConfirm={passwordConfirm}
                        setPasswordConfirm={setPasswordConfirm}
                        setCreateAccount={setCreateAccount}
                    />
                ) : (
                    <UserInformation
                        username={username}
                        email={email}
                        password={password}
                        setCreateAccount={setCreateAccount}
                    />
                )}
                <Footer />
            </div>
        </>
    );
};

export default App;
