import './Login.css';
import Hand from '../img/hands.svg';
import React, { useState } from 'react';

const Login = () => {

    const [account, setAccount] = useState('')
    function accountChange(e) {
        setAccount(e.target.value)
    }

    const [password, setPassword] = useState('')
    function passwordChange(e) {
        setPassword(e.target.value)
    }

    return(
        <div className="loginMain">
            <div className="handLogo"><img src={Hand} alt="HandLogo" /></div>
            <div className="input">
                <label>Account:</label>
                <input onChange={accountChange} value={account}></input>
                <label>Password:</label>
                <input type="password" value={password} onChange={passwordChange} ></input>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;