import "../../src/App.css";
import { Card, Row, Col } from "react-bootstrap";
export default function HomePage() {
  return (
    <div>
      <div className="backgroundImage"></div>
      <div style={{ padding: "150px" }}>
        <h1 className="homePage-title">
          <span className="BeTitle">GO</span> LOYAL
        </h1>
        <h3 id="homePage-h3">
          Replace loyalty coffee stamp cards by a simple step: scanning a QR
          code!
        </h3>
        <div className="homePage-cardComponent">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="homePage-card">
                <Card.Img
                  className="card-images"
                  variant="top"
                  src="https://cdn4.vectorstock.com/i/1000x1000/57/73/scan-qr-code-flat-icon-with-phone-barcode-vector-28695773.jpg"
                />
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
                <Card.Img
                  className="card-images"
                  variant="top"
                  src="https://media.istockphoto.com/vectors/stamp-line-icon-isolated-on-white-background-vector-id1167595064?k=20&m=1167595064&s=612x612&w=0&h=1cFw4_zi3UdV6uQzabYx3zeLa5bxOdfxHLEB_W3IKeo="
                />
                <Card.Body>
                  <Card.Title>Loyalty stamp card on your phone.</Card.Title>
                  <Card.Text>
                    Stop losing your stamp cards and have them organized on your
                    account.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="homePage-card">
                <Card.Img
                  className="card-images"
                  variant="top"
                  src="https://www.nicepng.com/png/detail/16-164159_graph-png-photo-black-business-icon-png.png"
                />
                <Card.Body>
                  <Card.Title>Keep track of your sales.</Card.Title>
                  <Card.Text>
                    If you have a coffee place, keep track of your sales and
                    free coffees you give per day.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="homePage-card">
                <Card.Img
                  className="card-images"
                  variant="top"
                  src="https://thumbs.dreamstime.com/b/earth-heart-shape-icon-vector-earth-heart-shape-sign-isolated-contour-symbol-illustration-earth-heart-shape-icon-vector-194027524.jpg"
                />
                <Card.Body>
                  <Card.Title>Good for the planet</Card.Title>
                  <Card.Text>Replace paper cards.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
