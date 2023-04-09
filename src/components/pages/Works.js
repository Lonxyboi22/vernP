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
                        <div className='modal-body' >
                        <div className="row" id="gallery" data-toggle="modal" data-target="#imageModal">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/Ovary2021.png" data-target="#imageCarousel" data-slide-to="0"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/2021EyeIllustration.png" data-target="#imageCarousel" data-slide-to="1"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/PalmarLayers.png" data-target="#imageCarousel" data-slide-to="2"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/Shovelincisors.png" data-target="#imageCarousel" data-slide-to="3"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/topsurgeryRemake.png" data-target="#imageCarousel" data-slide-to="4"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/2020Value.png" data-target="#imageCarousel" data-slide-to="5"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/imagesStill-life.png" data-target="#imageCarousel" data-slide-to="6"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/2021FantasyFigure.png" data-target="#imageCarousel" data-slide-to="7"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/colorpalletes.png" data-target="#imageCarousel" data-slide-to="8"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/2021HouseHusbands.JPG" data-target="#imageCarousel" data-slide-to="9"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/BeNiceorElse.png" data-target="#imageCarousel" data-slide-to="10"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/JordanBusinessCard.png" data-target="#imageCarousel" data-slide-to="11"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/PinupGhost.png" data-target="#imageCarousel" data-slide-to="12"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/Planesproject.png" data-target="#imageCarousel" data-slide-to="13"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/RyansRemedies2020.png" data-target="#imageCarousel" data-slide-to="14"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/speedPaint.png" data-target="#imageCarousel" data-slide-to="15"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/SelfPortrait2020.jpg" data-target="#imageCarousel" data-slide-to="16"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/SnesbiansSticker2020.png" data-target="#imageCarousel" data-slide-to="17"/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <img className="w-100" src="../images/TobiCrosshatch.jpg" data-target="#imageCarousel" data-slide-to="18"/>
                            </div>
                        </div>
                        <div id="imageCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="../images/Ovary2021.png"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../images/2021EyeIllustration.png"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../images/PalmarLayers.png"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../images/Shovelincisors.png"/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/topsurgeryRemake.png'/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="../images/2020Value.png"/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="../images/imagesStill-life.png"/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/2021FantasyFigure.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/colorpalletes.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/2021HouseHusbands.JPG'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/BeNiceorElse.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/JordanBusinessCard.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/PinupGhost.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/Planesproject.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/RyansRemedies2020.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/speedPaint.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/SelfPortrait2020.jpg'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/SnesbiansSticker2020.png'/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src='../images/TobiCrosshatch.jpg'/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">
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
            </Card>
        </Container>
    </Container>
    )
}

export default Works