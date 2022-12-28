import { Container, Row, Col } from "react-bootstrap";
import styles from "./App.module.css";
import SideNavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <Container fluid>
        <Row>
          <Col
            lg={3}
            className={`${styles.NavBarBgColor} d-none d-lg-block`}
          >
            <SideNavBar />
          </Col>
          <Col lg={5}>2</Col>
          <Col lg={4}>3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
