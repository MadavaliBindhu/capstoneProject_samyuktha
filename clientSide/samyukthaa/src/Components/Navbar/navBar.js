import React from "react";
import './navBar.css';
import { navBarItem } from "../Constant/navBarConstant";
import { Link } from "react-router-dom";
export const  NavBar=() => {
    return(
        <div className="navbar">
            
            <div className="maindiv">
                    <div className="letter"><Link className="Logo" to="/logo"><p>{navBarItem[0]}</p></Link></div>
                    <div className="home_text"><Link className ="home" to ="/">{navBarItem[1]}</Link></div>
                    <div className="File"><Link className="file" to="/fileComplaint">{navBarItem[2]}</Link></div>
                    <div className="consel">{navBarItem[3]}</div>
                    <div className="signup">{navBarItem[4]}</div>
                    <div className="login">{navBarItem[5]}</div>
            </div>
        </div>
    )
    }
    export default NavBar;
    