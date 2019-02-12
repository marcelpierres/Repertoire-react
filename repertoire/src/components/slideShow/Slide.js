import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
// css
// scss
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../../node_modules/font-awesome/scss/font-awesome.scss";
import "../../scss/resume.scss";
// js imports
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/jquery-easing/dist/jquery.easing.1.3.umd.min.js";
import "../../../node_modules/popper.js/dist/popper.js";
import "../../js/resume.js";
// Logo images
import IMG1 from "../../img/tech/IMG1.JPG";
import IMG2 from "../../img/tech/IMG2.JPG";
import IMG3 from "../../img/tech/IMG3.JPG";
import IMG4 from "../../img/tech/IMG4.JPG";
import IMG5 from "../../img/tech/IMG5.JPG";

class Slide extends Component {
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />


                <section class=" p-0 p-lg-0 d-flex flex-column" id="hobbies">
                    <div class="my-auto">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={IMG1}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={IMG2}
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={IMG3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={IMG4}
                                    alt="Forth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={IMG5}
                                    alt="Fifth slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </section>
            </div >
        );
    }
}

export default Slide;