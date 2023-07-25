import React from "react";
import './Footer.css';
export const  Footer=() => {
    return(
        <div className="footer">
            <div className="location">
                <div className="about">HOME</div>
                <div className="footer1">How It works</div>
                <div className="footer1">Psychologists</div>
                <div className="footer1">Free videos</div>
                <div className="footer1">About us</div>
            </div>
            <div className="Location">
                <div className="loco">LOCATION</div>
                <div className="footer1">Andhra</div>
                <div className="footer1">Telengana</div>
                <div className="footer1">Karnataka</div>
            </div>
            <div className="media">
                <div className="social">SOCIAL MEDIA</div>
                <div className="media-1">
                <div>
                    <img  className="google" src="resources/goog.png"/>
                </div>
            <div>
                <img className="face" src="resources/facebook.jpeg"/>
            </div>
            <div>
                <img  className="insta" src="resources/insta.jpeg"/>
            </div>
            </div>
            </div>
        </div>

)
    }

    export default Footer;
