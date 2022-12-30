import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import SideNavBar from "./components/SideNavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Container fluid>
        <Row>
          <Col
            lg={3}
            className={`${styles.NavBarBgColor} ${styles.ContextNavBarHeight}`}
          >
            <SideNavBar />
          </Col>
          <Col lg={5}>
            <Container>
              <Switch>
                <Route exact path={"/"} render={() => <h1>Home Page</h1>} />
                <Route exact path={"/about"} render={() => <h1>About</h1>} />
                <Route exact path={"/signin"} render={() => <h1>Sign in</h1>} />
                <Route exact path={"/signup"} render={() => <h1>Sign up</h1>} />
              </Switch>
            </Container>
          </Col>
          <Col lg={4}>Column 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
