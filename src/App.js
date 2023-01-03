import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import SideNavBar from "./components/SideNavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import About from "./pages/About";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
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
                    <Route
                      exact
                      path={"/signin"}
                      render={() => <SignInForm />}
                    />
                    <Route
                      exact
                      path={"/signup"}
                      render={() => <SignUpForm />}
                    />
                    <Route render={() => <h1>Page not found</h1>} />
                  </Switch>
                </Container>
              </Col>
              <Col
                lg={4}
                sm={{ span: 4, order: "last" }}
                xs={{ order: "first" }}
              >
                <Container>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nam recusandae hic totam obcaecati fugit adipisci
                    perferendis nihil veritatis quibusdam laborum?
                  </p>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
