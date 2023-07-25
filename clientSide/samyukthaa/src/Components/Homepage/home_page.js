import React from "react";
import './home_page.css';
export const  Home=() => {
    return(
        <div className="navbar">
            
            <div>
                <img alt="image1" className ="banner" src="resources/gettywomen.jpg"/>
                <div className="text-overlay">
                    <h1>OUR MISSION</h1>
                    <p>An inclusive development of downtrodden, disadvantaged,
                         stigmatized, vulnerable, high-risk sections to lead 
                         productive, safe dignified and sustainable lives.</p>
                </div>                                                        
            </div>
            <div className="welcome">
                <div className="come-page">
                    <img alt="image1
                        " className ="namasthe" src="resources/welcome-hand.png"/>
                    <h2>WELCOME TO </h2><h1>SAMYUKTHAA</h1>
                </div>
                <div className="emergency">
                    <h1>Emergency</h1>
                    <p>If a woman is seeking help due to 
                        domestic <br/>violence in her home, 
                        she can immediately <br/>file a complaint.</p>
                        <h1>Igniting strength, inspiring change</h1>
                        <p>Highly qualified team of some of the best names
                             in psychology who deliver improved well-being 
                             to you.Carefully vetted through a rigorous selection 
                             process. Trained and experienced in all psychotherapy techniques.
                        </p>
                    
                </div>
            </div>
                <div className="works"> How It Works </div>
                <div className="itwork">
                    <img alt="image1
                        " className="calandar" src="resources/png-transparent-professional.png"/>
                    <img alt="image1
                        " className="arrow" src="resources/arrow.png"/>
                    <img alt="image1
                        " className="person" src="resources/ngo.png"/>
                    <img alt="image1
                        " className="arrow" src="resources/arrow.png"/>
                    <img alt="image1
                        " className="message" src="resources/blue-login-icon.webp"/>
                    <img alt="image1
                        " className="arrow" src="resources/arrow.png"/>
                    <img alt="image1
                        " className="clock" src="resources/person.png"/>
                </div>
                <div className="function">
                    <div className="Book">Uploding img/audio/video</div>
                    <div className="pick">Connecting to NGO</div>
                    <div className="join">The process to Login</div>
                    <div className="reschedule">If needed Connect<br/> with Counsellor</div>
                </div>
                <div className="help">Specialized Help For Your Mental Health</div>
                <div className="Specialized">
                    <button className="Anxiety">Anxiety & Stress</button>
                    <button className="Depress">Depression</button>
                    <button className="Issues">Relationship Issues</button>
                    <button className="OCD">OCD</button>
                </div>
                <div className="Special">
                    <button className="Psychosis">Psychosis</button>
                    <button className="Grief">Grief & Loss</button>
                    <button className="Couple">Couple Therapy</button>
                    <button className="LGB">LGBTQIA+</button>
                </div>
                <div className="Spe">
                    <button className="Teenage">Teenage Issues</button>
                    <button className="Sexual">Grief & Loss</button>
                    <button className="Bipolar">Bipolar Disorder</button>
                </div>
                <div className="Involved">
                        <h1>Get in Touch. Get Involved.</h1>
                </div>
        </div>

    )
    }

    export default Home;