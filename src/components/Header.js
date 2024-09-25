import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import textLogo from "../images/textLogo.svg";

import '../styles/Header.css'

function Header({ token, role, firstName, handleLogout }) {
    const userName = [
        role && firstName ? `${role}: ${firstName}` :
            role ? role :
                firstName
    ].filter(Boolean).join('') || '';
    
    return (
        <header className="head">
            <div className="first_line">
                <Link className="Logo" to="/">
                    <img alt="Silant logo" src={logo} className="logo"/>
                    <img alt="Silant textLogo" src={textLogo} className="textLogo"/>
                </Link>
                <div className="info">
                    <p>
                        +7-8352-20-12-09
                    </p>
                    <p className="header_text">
                        Электронная сервисная книжка "Мой Силант"
                    </p>
                </div>
            </div>
            <div className="user_info">
                <p>{userName}</p>
                {!token ?
                    <Link className="btn-primary" to="/login">Авторизоваться</Link> :
                    <div className="buttonLogout">
                        <input
                            className="Logout"
                            type="submit"
                            name="submit"
                            value="Выйти"
                            onClick={handleLogout}
                        />
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;