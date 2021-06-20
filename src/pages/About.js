import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <div className="page-header" style={{ paddingBottom: "20px" }}>
              <h1>About Me</h1>
            </div>
            <Row>
              <Col size="md-6">
                <div className="box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim, felis ut dictum tristique,
                    nibh erat feugiat libero, sit amet fringilla mauris velit in mi. Duis tempus felis vitae
                    felis vulputate pretium. Nullam commodo, est ac auctor ornare, eros nisi fringilla sem,
                    non pulvinar tortor lorem sit amet sem. Aenean quis erat facilisis, porttitor ex cursus,
                    luctus enim. Curabitur et metus in lacus tristique sagittis et in lorem. Nunc id nisi et
                    neque fringilla ultricies.
            </p>
                </div>
              </Col>

              <Col size="md-1" />

              <Col size="md-5">
                
              </Col>
            </Row>

          </Col>

        </Row>
      </Container>

    </div>
  );
}

export default About;
