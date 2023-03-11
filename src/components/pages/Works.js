import { Container, Card} from "react-bootstrap"


const Works = (props) => {
    return(
    <Container fluid className="project-section">
        <Container className= "project-container">
            <Card className="project-card1">
                <Card.Body className="card-body">
                        <img style={{ width: 150, height: 100 }} src={require('../images/placeholder.png')}></img>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                <img style={{ width: 150, height: 100 }} src={require('../images/placeholder.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card3">
                <Card.Body>
                <img style={{ width: 150, height: 100 }} src={require('../images/placeholder.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card4">
                <Card.Body>
                <img style={{ width: 150, height: 100 }} src={require('../images/placeholder.png')}></img>                </Card.Body>
            </Card>
        </Container>
        <Container className= "project-container">
            <Card className="project-card1">
                <Card.Body className="card-body">
                        <img style={{ width: 150, height: 100 }} src={require('../images/colorpalletes.png')}></img>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                <img style={{ width: 150, height: 100 }} src={require('../images/placeholder.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card3">
                <Card.Body>
                <img style={{ width: 150, height: 100 }} src={require('../images/placeholder.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card4">
                <Card.Body>
                <img style={{ width: 150, height: 100 }} src={require('../images/placeholder.png')}></img>                </Card.Body>
            </Card>
        </Container>
    </Container>
    )
}

export default Works