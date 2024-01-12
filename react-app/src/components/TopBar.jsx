import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-info p-0">
    <Container>
      <div className="py-2 d-flex justify-content-center align-items-center">
        <Link to={"/"}>
          <img className="img-logo" src="assets/img/logo.png" alt="logo"></img>
        </Link>
        <p className="fw-lighter fs-4 m-0">EpiWeather</p>
      </div>
    </Container>
  </div>
);

export default TopBar;
