import "bulma/css/bulma.min.css";
import React, { Component } from 'react';

const Home = (props) => {
    return (
    <div>
        <div className="columns">
            <div className=" column is-3">
                <img style={{ width: 240, height: 300 }} src={require('../images/Headshot_Babey.png')}>
                </img>
                <p className="bd-notification">Bakkstabbath<br/>-Vern Planck</p>
            </div>
            <div className="column is-4">
                <p className="bd-notification">This column with more content. this is going to be used for a bio ish thing/short blurb or quote</p>
            </div>
            <div className="column">
                <p>This is for social media links</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                <ul className="footer-icons" style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
                <li className="social-icons" style={{   float: "left" }}>
                    <a href="https://www.linkedin.com/in/vern-planck/" style={{ display:"block", padding: 10 }}>
                        <img style={{ width: 50, height: 50 }} src={require('../images/linkedin.png')}>
                        </img>
                    </a>
                </li>
                <li className="social-icons" style={{   float: "left" }}>
                    <a href="https://www.instagram.com/bakstabbath.art/" style={{ display:"block", padding: 10 }}>
                        <img style={{ width: 50, height: 50 }} src={require('../images/instagram.png')}>
                        </img>
                    </a>
                </li>
            </ul>
            </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default Home