import React, { Component } from 'react';
import { Container, Card} from "react-bootstrap"
import { Modal } from 'react-bootstrap';


const Works = (props) => {

    return(
    <Container fluid className="project-section">
        <Container className= "project-container" id='gallery' data-toggle='modal' data-target='#imageModal'>
            <Card className="project-card1">
                <div className='modal fade' id='imageModal' tabIndex='-1' role='dialog' aria-hidden='true'>
                    <div className='modal-content'>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div>
                        <div id="imageCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="../images/Ovary2021.png"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../images/2021EyeIllustration.png"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../images/imagesStill-life.png"/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="../images/imagesStill-life.png"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
                <Card.Body className="card-body">
                        <img style={{ width: 200, height: 300 }} src={require('../images/Ovary2021.png')}></img>
                </Card.Body>
            </Card>
            <Card className="project-card2">
                <Card.Body>
                <img style={{ width: 300, height: 200 }} src={require('../images/Still-life.png')}></img>                </Card.Body>
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