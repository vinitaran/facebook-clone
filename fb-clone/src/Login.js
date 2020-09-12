import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import {auth, provider} from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider"

function Login() {
    // eslint-disable-next-line
    const[state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));

};
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="fb_logo"/>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="fb_written"/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login
