import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import passwordGenerator from "../Assets/Images/portfolio/password-generator.png";


function Portfolio() {
    return (
        <div>
            <section class="jumbotron text-center">
                <Container>
                    <div class="cleaner_h10"></div>
                    <p>Thank you for interesting in my portfolio, please do not hestiste to open the link get get to know more about me.</p>
                </Container>
            </section>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1 style={{paddingTop: "10px"}}>Portfolio</h1>
                        <Col size="mb-4">
                            <div className="card">
                                <img src={passwordGenerator} className="card-img-top" alt="booststrap" />
                                <div className="card-body">
                                    <h5 className="card-title">Password Generator</h5>
                                    <p className="card-text">The purpose of the web page is when the user would like to a generate a random
                  number of password and the page will provide them with the desire content and length.</p>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-info" href=" https://mayqa001.github.io/passwordGenerator/" target="_blank">View
                  Website</a>
                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-primary" href="https://github.com/mayqa001/passwordGenerator" target="_blank">View
                                                code</a>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Portfolio;