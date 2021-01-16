import React from "react";

const Form = ({
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    setCreateAccount,
}) => {
    const handleUsername = (event) => {
        const value = event.target.value;
        setUsername(value);
    };
    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    };
    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    };
    const handlePasswordConfirm = (event) => {
        const value = event.target.value;
        setPasswordConfirm(value);
    };

    return (
        <div className="form-container">
            <h1 className="title">Create Account</h1>

            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    // if all fields are filled...
                    if (username && email && password && passwordConfirm) {
                        // ... if passwords are identical
                        if (passwordConfirm === password) {
                            // go to the next step
                            setCreateAccount(2);
                        } else {
                            alert("Passwords must be identical !");
                        }
                    } else {
                        alert("Required field !");
                    }
                }}
            >
                <div className="label">
                    <p>Name</p>
                </div>

                <input
                    type="text"
                    placeholder="Jean Dupont"
                    value={username}
                    onChange={handleUsername}
                />

                <div className="label">
                    <p>Email</p>
                </div>

                <input
                    type="email"
                    placeholder="jeandupont@lereacteur.io"
                    value={email}
                    onChange={handleEmail}
                />

                <div className="label">
                    <p>Password</p>
                </div>

                <input
                    type="password"
                    placeholder="* * * * * *"
                    value={password}
                    onChange={handlePassword}
                />

                <div className="label">
                    <p>Confirm your password</p>
                </div>

                <input
                    type="password"
                    placeholder="* * * * * *"
                    value={passwordConfirm}
                    onChange={handlePasswordConfirm}
                />
                <button className="register-btn" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Form;
