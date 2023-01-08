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
import PostsContentPage from "./pages/posts/PostsPageContent";

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
            lg={{ span: 7, offset: 2 }}
            sm={{ span: 8, order: "first" }}
            xs={{ order: "last" }}
            className="gx-0 gx-sm-1 pt-3 pt-sm-5 pt-lg-0"
          >
            <Container>
              <Switch>
                <Route
                  exact
                  path={"/"}
                  render={() => (
                    <PostsContentPage message="Results were not found. Please adjust your search keyword" />
                  )}
                />
                <Route
                  exact
                  path={"/followings_feed"}
                  render={() => (
                    <PostsContentPage message="Results were not found. Please adjust your search keyword or follow the user" />
                  )}
                />
                <Route
                  exact
                  path={"/bookmarked_topics"}
                  render={() => (
                    <PostsContentPage message="Results were not found. Please adjust your search keyword or bookmark the post you are interested in" />
                  )}
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
          <Col
            lg={3}
            sm={{ span: 4, order: "last" }}
            xs={{ order: "first" }}
            className="mt-5"
          >
            <Container>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              quisquam facilis itaque hic recusandae, alias quam atque excepturi
              numquam et quibusdam dolore fuga enim a quasi tempore expedita!
              Cupiditate, natus?
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
