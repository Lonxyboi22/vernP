import "bulma/css/bulma.min.css";
import React, { Component } from 'react';

const Bio = (props) => {
    return (
    <div>
        <div className="columns">
            <div className=" column is-3">
                <img style={{ width: 240, height: 300 }} src={require('../images/Headshot_Babey.png')}>
                </img>
                <p className="bd-notification">Back Stabbath<br/>-Vern Planck</p>
            </div>
            <div className="column is-4">
                <p className="bd-notification bio-text">
                    Name: Vern Planck<br/>
                    Location:Grand Rapids<br/>
                    Education: KCAD, GRCC, NCMC, MSU,<br/>
                    Projects of interest: processes I.E. Surgical processes, how a piece of anatomy works, etc. as well as a variety of other services.<br/>
                    Preferred mediums: digital, ink, oil paint, graphite<br/>
                    Work style: efficient, communicative, flexible 
                    <br/>
                    Vern Planck is a Medical Illustration student based in Grand Rapids, Michigan. He specializes in digital and ink media but also enjoys exploring other types of mediums. Vern loves to do projects that depict how things work like surgical procedures and biological processes. In his free time Vern enjoys playing video games, making cosplays, and spending time with his partner and pets.
                </p>
            </div>
        </div>
    </div>
    )
  }

  export default Bio