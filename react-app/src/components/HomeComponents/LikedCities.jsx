import { Row } from "react-bootstrap";
import CityCard from "./CityCard";

const LikedCities = (props) => {
  console.log(props.likedCities);
  if (props.likedCities.length !== 0) {
    return (
      <>
        <h4 className="display-6 mt-5">Città preferite:</h4>
        <Row className="g-2 mt-2">
          {props.likedCities.map((city) => (
            <p>{city}</p>
          ))}
        </Row>
      </>
    );
  } else {
    return <h4 className="display-6 mt-5">Nessuna città preferita</h4>;
  }
};

export default LikedCities;
