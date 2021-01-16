import React from "react";

const UserInformation = ({ username, email, password, setCreateAccount }) => {
    const handleEditInformation = () => {
        setCreateAccount(1);
    };

    return (
        <>
            <h1 className="title">User Information</h1>

            <div className="information-container">
                <div className="information">
                    <p>Name : {username}</p>
                    <p>Email : {email}</p>
                    <p>Password : {password}</p>
                </div>

                <button className="edit-btn" onClick={handleEditInformation}>
                    Edit your information
                </button>
            </div>
        </>
    );
};

export default UserInformation;
