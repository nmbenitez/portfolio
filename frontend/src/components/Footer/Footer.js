import React from 'react';
import "./Footer.scss";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-content">
                <h3>You can also contact me on my social media! :)</h3>
                <div className="footer-content-imgs">
                    <img src="static/img/twitter.png"></img>
                    <img src="static/img/linkedin.png"></img>
                </div>
            </div>
            
        </div>
    );
}