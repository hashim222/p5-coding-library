import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./App.module.css";
import SideNavBar from "./components/SideNavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import About from "./pages/About";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPageContent from "./pages/posts/PostPageContent";
import PostsPageContent from "./pages/posts/PostsPageContent";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import PopularProfiles from "./pages/profiles/PopularProfiles";
import ProfilePageContent from "./pages/profiles/ProfilePageContent";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ContactForm from "./pages/ContactForm";
import ThankYou from "./pages/ThankYou";
import NotFound from "./components/NotFound";

const App = () => {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

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
            md={{ span: 7, order: "first" }}
            xs={{ order: "last" }}
            className="gx-0 gx-sm-1 pt-3 pt-sm-5 pt-lg-0"
          >
            <Container>
              <Switch>
                <Route
                  exact
                  path={"/"}
                  render={() => (
                    <PostsPageContent message="Results were not found. Please adjust your search keyword." />
                  )}
                />
                <Route
                  exact
                  path={"/followings_feed"}
                  render={() => (
                    <PostsPageContent
                      message="Results were not found. Please adjust your search keyword or follow the user."
                      filter={`owner__followed__owner__profile=${profile_id}&`}
                    />
                  )}
                />
                <Route
                  exact
                  path={"/bookmarked_topics"}
                  render={() => (
                    <PostsPageContent
                      message="Results were not found. Please adjust your search keyword or bookmark the post you are interested in."
                      filter={`bookmark_posts__owner__profile=${profile_id}&ordering=-bookmark_posts__created_on&`}
                    />
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
                <Route
                  exact
                  path="/posts/:id/edit"
                  render={() => <PostEditForm />}
                />
                <Route
                  exact
                  path="/profiles/:id"
                  render={() => <ProfilePageContent />}
                />
                <Route
                  exact
                  path="/profiles/:id/edit/username"
                  render={() => <UsernameForm />}
                />
                <Route
                  exact
                  path="/profiles/:id/edit/password"
                  render={() => <UserPasswordForm />}
                />
                <Route
                  exact
                  path="/profiles/:id/edit"
                  render={() => <ProfileEditForm />}
                />
                <Route
                  exact
                  path="/contact/create"
                  render={() => <ContactForm />}
                />
                <Route exact path="/thank_you" render={() => <ThankYou />} />
                <Route render={() => <NotFound />} />
              </Switch>
            </Container>
          </Col>
          <Col
            lg={3}
            md={{ span: 5, order: "last" }}
            xs={{ order: "first" }}
            className="mt-5 pl-0 pr-0 pr-md-3"
          >
            <PopularProfiles mobile />
            <PopularProfiles desktop />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
