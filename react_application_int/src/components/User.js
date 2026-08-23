import React from "react";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../redux/userSlice";

function User() {

    const dispatch = useDispatch();

    const loginUser = () => {
        dispatch(
            setUser({
                id: 1,
                name: "Piyush",
                email: "piyush@gmail.com",
            })
        );
    };

    const logoutUser = () => {
        dispatch(removeUser());
    };

    return (
        <div>
            <button onClick={loginUser}>
                Login
            </button>

            <button onClick={logoutUser}>
                Logout
            </button>
        </div>
    );
}

export default User;