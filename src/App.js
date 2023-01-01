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
          <Col lg={6} sm={{ span: 8, order: "first" }} xs={{ order: "last" }}>
            <Container>
              <Switch>
                <Route exact path={"/"} render={() => <h1>Home Page</h1>} />
                <Route exact path={"/about"} render={() => <About />} />
                <Route exact path={"/signin"} render={() => <SignInForm />} />
                <Route exact path={"/signup"} render={() => <SignUpForm />} />
                <Route render={() => <h1>Page not found</h1>} />
              </Switch>
            </Container>
          </Col>
          <Col lg={4} sm={{ span: 4, order: "last" }} xs={{ order: "first" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              minima sunt nostrum natus expedita rerum praesentium unde quasi?
              Possimus iste saepe, quos vel facere expedita dolores quam fugiat!
              Minima omnis distinctio voluptatibus autem, esse animi, excepturi
              in delectus eius sunt consectetur eaque quasi illum id perferendis
              voluptate recusandae labore quis harum! Natus veniam quo ducimus
              fugiat autem vitae cumque facere deserunt. Earum nam quo quisquam
              incidunt voluptate ut enim, nemo odio voluptatum, cupiditate
              officia? Praesentium in, molestias exercitationem assumenda
              facilis itaque quos, corporis nulla unde nobis libero ea ipsam
              quidem, earum pariatur maxime. Pariatur minus nihil adipisci eaque
              fugiat fugit omnis iure consequatur impedit blanditiis dicta et
              voluptate voluptatum odit id illum, ullam ipsam! Nesciunt
              reiciendis harum, inventore dolore possimus architecto dolores
              nam, beatae quae nisi temporibus impedit nostrum consequuntur
              natus debitis ipsa eligendi perferendis maxime. Provident unde
              numquam reprehenderit nihil iure, perspiciatis consequatur ipsa
              nostrum corrupti non doloribus! Voluptates, labore quae quasi
              maiores eaque adipisci eum illo fugit enim. Minus, quam nihil.
              Quas aliquam cumque dolor vel soluta in quasi voluptate odit
              accusamus atque tempore nihil harum aut praesentium dicta itaque,
              quisquam minus accusantium enim temporibus modi ad iste
              repellendus? Sed, eligendi! Libero error sed assumenda, vel quidem
              nam atque autem pariatur aperiam repellendus! Fugit voluptatem
              possimus aliquid velit sequi totam mollitia odit, nihil
              necessitatibus officia voluptate fuga culpa ut accusantium
              distinctio omnis sapiente id inventore ea hic harum optio error!
              Ipsum ut adipisci necessitatibus amet recusandae iste dicta error
              natus. Labore minima reiciendis magni explicabo ducimus, sit
              repudiandae fuga! Iure ullam inventore quo. Autem praesentium unde
              ipsam aliquid itaque, commodi eligendi a. Mollitia animi maxime in
              recusandae et quo reprehenderit, quod repellendus alias nostrum?
              Non ad minima optio a veritatis iste aperiam provident, laboriosam
              corporis! Accusantium sint earum, quos ullam repellendus modi hic!
              Esse et ducimus asperiores repellat accusamus aliquam veritatis
              facilis soluta dicta quod. Minus corporis laudantium dignissimos
              officia quasi accusamus, soluta nulla similique enim aperiam. Enim
              consequuntur veniam natus dignissimos incidunt impedit nisi,
              dolorem maiores in ab aut fugit eaque illum facilis, possimus
              repellendus. Itaque, voluptas dolore? Esse numquam accusamus aut
              hic, magni quisquam perspiciatis facilis rerum perferendis
              aperiam, pariatur magnam iusto reprehenderit deserunt reiciendis
              eum neque vitae! Nobis delectus perspiciatis hic libero ipsam.
              Sequi optio fuga temporibus pariatur mollitia vel, assumenda
              delectus aut dolore molestias ex sed eveniet commodi tempora, rem
              accusamus ratione alias? Earum incidunt ullam vero omnis. Expedita
              similique architecto vitae, obcaecati alias id incidunt aliquam
              saepe laborum magnam tempore iste sapiente, repellendus officia
              vero rerum sequi pariatur dicta nulla dolore ducimus! Velit
              nostrum voluptate, aliquam ad facilis nihil! Consectetur ducimus
              sint vitae modi debitis deserunt odio quisquam harum esse quia
              perferendis, alias nostrum sit pariatur ea labore dolorum!
              Officiis voluptates nesciunt quia atque tenetur natus porro
              suscipit voluptate ducimus adipisci distinctio illum minus
              voluptas sequi nostrum ipsa perferendis doloribus, fugit molestiae
              reiciendis magni facilis rem. Expedita consequatur a voluptates
              accusamus veniam aspernatur id. Consectetur deleniti expedita, ad
              aspernatur perferendis placeat nulla velit dolorem dolore
              voluptate praesentium neque soluta consequuntur possimus corrupti
              iste.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
