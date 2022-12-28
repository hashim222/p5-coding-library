import { Container, Row, Col } from "react-bootstrap";
import styles from "./App.module.css";
import SideNavBar from "./components/SideNavBar";
import Home from "./components/ShowNavBar";

function App() {
  return (
    <div className={styles.App}>
      <Container fluid>
        <Row>
          <Col lg={3} className={`${styles.NavBarBgColor}`}>
            <Home />
            <SideNavBar />
          </Col>
          <Col lg={5} style={{backgroundColor:'pink'}}>2</Col>
          <Col lg={4} style={{backgroundColor:'grey'}}>3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
