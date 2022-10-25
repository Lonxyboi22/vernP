import "bulma/css/bulma.min.css";

import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
    return (
    <div>
        <div className="columns is-vcentered">
            <div className="column is-3">
                <img style={{ width: 200, height: 200 }} src={require('../images/placeholder.png')}>
                </img>
                <p className="bd-notification">-Vern Planck</p>
            </div>
            <div className="column is-4">
                <p className="bd-notification">This column with more content. this is going to be used for a bio ish thing</p>
            </div>
            <div className="column">
                <p>This is for social media links</p>
            </div>
        </div>
    </div>
    )
  }
  
  export default Home