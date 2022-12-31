import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import SideNavBar from "./components/SideNavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";

function App() {
  return (
    <div className={styles.App}>
      <Container fluid>
        <Row>
          <Col
            lg={2}
            className={`${styles.NavBarBgColor} ${styles.ContextNavBarHeight}`}
          >
            {/* Side Navbar */}
            <SideNavBar />
          </Col>
          <Col lg={6} sm={8}>
            <Container>
              <Switch>
                <Route exact path={"/"} render={() => <h1>Home Page</h1>} />
                <Route exact path={"/about"} render={() => <h1>About</h1>} />
                <Route exact path={"/signin"} render={() => <SignInForm />} />
                <Route exact path={"/signup"} render={() => <SignUpForm />} />
                <Route render={() => <h1>Page not found</h1>} />
              </Switch>
            </Container>
          </Col>
          <Col lg={4} sm={4}>
            Column 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
