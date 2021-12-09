import "../../src/App.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import qrcode from "../qrcode.png";
import stamp from "../stamp.png";
import planet from "../planet.png";
import graphic from "../graphic.png";
export default function HomePage() {
  return (
    <div>
      <div className="backgroundImage"> </div>
      <h1 className="homePage-title">
        <span className="BeTitle">GO</span> LOYAL
      </h1>
      <h3 id="homePage-h3">
        Replace loyalty coffee stamp cards by a simple step: scanning a QR code!
      </h3>
      <div className="homePage-cardComponent">
        <Container fluid>
          <Row lg={4} xs={1} md={2} className="g-4">
            <Col>
              <Card className="homePage-card">
                <Card.Img className="card-images" variant="top" src={qrcode} />
                <Card.Body>
                  <Card.Title>Easy QR code system</Card.Title>
                  <Card.Text>
                    Don't need to download another app on your phone. Scan,
                    Login, Stamp.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="homePage-card">
                <Card.Img className="card-images" variant="top" src={stamp} />
                <Card.Body>
                  <Card.Title>Loyalty stamp card on your phone.</Card.Title>
                  <Card.Text>
                    Stop losing your stamp cards and have them organized on your
                    account.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="homePage-card">
                <Card.Img className="card-images" variant="top" src={graphic} />
                <Card.Body>
                  <Card.Title>Track your sales.</Card.Title>
                  <Card.Text>
                    As a coffee owner keep track of your sales and free coffees
                    you give per day.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="homePage-card">
                <Card.Img className="card-images" variant="top" src={planet} />
                <Card.Body>
                  <Card.Title>Good for the planet</Card.Title>
                  <Card.Text>Stop wasting trees on loyalty cards.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
