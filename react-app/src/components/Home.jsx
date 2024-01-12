import { Container } from "react-bootstrap";
import LikedCities from "./HomeComponents/LikedCities";
import SearchBar from "./HomeComponents/SearchBar";

const Home = (props) => {
  return (
    <Container className="mt-5">
      <SearchBar></SearchBar>
    </Container>
  );
};

export default Home;
