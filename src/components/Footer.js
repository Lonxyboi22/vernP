import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
    let date = new Date();
    let year = date.getFullYear();
    return (
    <Container fluid className="has-text-centered footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Andrew Macpherson</h3>
            <h3>Artwork and Design by Vern Planck</h3>          
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} ASM + VSP</h3>
          </Col>
        </Row>
    </Container>
    )
  }
  
  export default Footer