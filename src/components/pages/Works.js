import { Container, Card} from "react-bootstrap"


const Works = (props) => {
    return(
    <Container fluid className="project-section">
        <Container className= "project-container">
            <Card className="project-card1">
                <Card.Body className="card-body">
                        <img style={{ width: 200, height: 300 }} src={require('../images/Ovary2021.png')}></img>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                <img style={{ width: 300, height: 200 }} src={require('../images/FTMTopsurgery.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card3">
                <Card.Body>
                <img style={{ width: 300, height: 350 }} src={require('../images/2021EyeIllustration.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card4">
                <Card.Body>
                <img style={{ width: 300, height: 250 }} src={require('../images/2021FantasyFigure.png')}></img>                </Card.Body>
            </Card>
        </Container>
        <Container className= "project-container">
            <Card className="project-card1">
                <Card.Body className="card-body">
                        <img style={{ width: 200, height: 300 }} src={require('../images/colorpalletes.png')}></img>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                <img style={{ width: 300, height: 200 }} src={require('../images/2020Value.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card3">
                <Card.Body>
                <img style={{ width: 300, height: 300 }} src={require('../images/2021HouseHusbands.JPG')}></img>                </Card.Body>
            </Card>
            <Card className="project-card4">
                <Card.Body>
                <img style={{ width: 300, height: 300 }} src={require('../images/BeNiceorElse.png')}></img>                </Card.Body>
            </Card>
        </Container>
        <Container className= "project-container">
            <Card className="project-card1">
                <Card.Body className="card-body">
                        <img style={{ width: 300, height: 300 }} src={require('../images/coyote.jpg')}></img>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                <img style={{ width: 300, height: 300 }} src={require('../images/JordanBusinessCard.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card3">
                <Card.Body>
                <img style={{ width: 200, height: 300 }} src={require('../images/PalmarLayers.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card4">
                <Card.Body>
                <img style={{ width: 300, height: 300 }} src={require('../images/PinupGhost.png')}></img>                </Card.Body>
            </Card>
        </Container>
        <Container className= "project-container">
            <Card className="project-card1">
                <Card.Body className="card-body">
                        <img style={{ width: 300, height: 300 }} src={require('../images/Planesproject.png')}></img>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                <img style={{ width: 250, height: 300 }} src={require('../images/RyansRemedies2020.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card3">
                <Card.Body>
                <img style={{ width: 250, height: 300 }} src={require('../images/SelfPortrait2020.jpg')}></img>                </Card.Body>
            </Card>
            <Card className="project-card4">
                <Card.Body>
                <img style={{ width: 300, height: 250 }} src={require('../images/Shovelincisors.png')}></img>                </Card.Body>
            </Card>
        </Container>
        <Container className= "project-container">
            <Card className="project-card1">
                <Card.Body className="card-body">
                        <img style={{ width: 300, height: 250 }} src={require('../images/SnesbiansSticker2020.png')}></img>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                <img style={{ width: 250, height: 300 }} src={require('../images/speedPaint.png')}></img>                </Card.Body>
            </Card>
            <Card className="project-card3">
                <Card.Body>
                <img style={{ width: 300, height: 250 }} src={require('../images/TobiCrosshatch.jpg')}></img>                </Card.Body>
            </Card>
            <Card className="project-card4">
                <Card.Body>
                <img style={{ width: 250, height: 300 }} src={require('../images/topsurgeryRemake.png')}></img>                </Card.Body>
            </Card>
        </Container>
    </Container>
    )
}

export default Works