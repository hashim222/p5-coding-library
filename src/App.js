import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import SideNavBar from "./components/SideNavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import About from "./pages/About";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPageContent from "./pages/posts/PostPageContent";

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
            lg={{ span: 6, offset: 2 }}
            sm={{ span: 8, order: "first" }}
            xs={{ order: "last" }}
            className="gx-0 gx-sm-1 pt-3 pt-sm-5 pt-lg-0"
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
                <Route
                  exact
                  path="/posts/create_topic"
                  render={() => <PostCreateForm />}
                />
                <Route
                  exact
                  path="/posts/:id"
                  render={() => <PostPageContent />}
                />
                <Route render={() => <h1>Page not found</h1>} />
              </Switch>
            </Container>
          </Col>
          <Col lg={4} sm={{ span: 4, order: "last" }} xs={{ order: "first" }}>
            <Container>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel
              laboriosam voluptas in, qui facere expedita corporis incidunt
              magnam consequatur sunt sapiente dicta reprehenderit quidem quo,
              et, eos earum dolorem.
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
