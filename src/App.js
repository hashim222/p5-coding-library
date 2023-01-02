import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import SideNavBar from "./components/SideNavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import About from "./pages/About";

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
          <Col
            style={{ paddingLeft: "250px" }}
            lg={6}
            sm={{ span: 8, order: "first" }}
            xs={{ order: "last" }}
            className="pt-5 pt-lg-0"
          >
            <Container>
              <Switch>
                <Route
                  exact
                  path={"/"}
                  render={() => <h1>Home Page Home Page</h1>}
                />
                <Route exact path={"/about"} render={() => <About />} />
                <Route exact path={"/signin"} render={() => <SignInForm />} />
                <Route exact path={"/signup"} render={() => <SignUpForm />} />
                <Route render={() => <h1>Page not found</h1>} />
              </Switch>
            </Container>
          </Col>
          <Col lg={4} sm={{ span: 4, order: "last" }} xs={{ order: "first" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              recusandae hic totam obcaecati fugit adipisci perferendis nihil
              veritatis quibusdam laborum?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
