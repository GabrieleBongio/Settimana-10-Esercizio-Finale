import { useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [searchedLocation, setSearchedLocation] = useState([]);

  const fetchLocation = async () => {
    if (value !== "") {
      try {
        const resp = await fetch(
          "http://api.openweathermap.org/geo/1.0/direct?q=" + value + "&limit=10&appid=c7eb58c53c4549092002fa6af4a424cf"
        );
        if (resp.ok) {
          const location = await resp.json();
          console.log(location);
          setSearchedLocation(location);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setSearchedLocation([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLocation();
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Form className="d-flex gap-3" onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            type="text"
            placeholder="Inserisci la tua città..."
            className=" mr-sm-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="submit" className="btn-info">
            Cerca
          </Button>
        </Form>
      </div>
      <Row className="mt-3 justify-content-center">
        <Col xs={6}>
          <ListGroup>
            {searchedLocation.map((location) => (
              <Link
                className="list-group-item"
                to={`/${location.lat},${location.lon}`}
                key={`${location.lat}-${location.lon}`}
              >
                {location.name} - {location.state} - {location.country}
              </Link>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
