import React from 'react';
import "./Footer.scss";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-content">
                <h3>You can also contact me on my social media! :)</h3>
                <div className="footer-content-imgs">
                    <a href="https://twitter.com/nahuelmbenitez" target="_blank" ><img  src="static/img/twitter.png"></img></a>
                    <a href="https://www.linkedin.com/in/nahuel-benitez-43648b1b7/" target="_blank" ><img href="" src="static/img/linkedin.png"></img></a>
                </div>
            </div>
            
        </div>
    );
}