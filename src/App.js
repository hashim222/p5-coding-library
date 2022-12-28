import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg={3} style={{ backgroundColor: "yellow" }}>
            <NavBar />
          </Col>
          <Col lg={5} style={{ backgroundColor: "pink" }}>
            2
          </Col>
          <Col lg={4} style={{ backgroundColor: "grey" }}>
            3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
