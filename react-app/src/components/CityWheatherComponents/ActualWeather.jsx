import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ActualWeather = (props) => {
  const params = useParams();
  const coordinate = params.latlon;
  const arrayCoordinate = coordinate.split(",");
  const lat = arrayCoordinate[0];
  const lon = arrayCoordinate[1];

  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=c7eb58c53c4549092002fa6af4a424cf&lang=it&units=metric"
      );
      if (resp.ok) {
        const fetchedWeather = await resp.json();
        console.log(fetchedWeather);
        setWeather(fetchedWeather);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, []);

  const addLikedCity = (city) => {
    props.setLikedCities(props.likedCities.push(city));
  };

  if (weather) {
    return (
      <div
        className={`${props.imagesAndIcons[weather.weather[0].icon].bgClass} ${
          props.imagesAndIcons[weather.weather[0].icon].textClass
        } py-5`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs="8" sm="4" xl={{ span: 3, offset: 3 }}>
              <div>
                <p className="fs-4">{weather.name}</p>
              </div>
              <div className="mt-2">
                <img src={props.imagesAndIcons[weather.weather[0].icon].iconElem} alt="..." className="" />
              </div>
              <div className="mt-2">
                <h2 className="display-1">{Math.round(weather.main.temp)}°</h2>
              </div>
              <div className="mt-2">
                <p>
                  min {Math.round(weather.main.temp_min)}° - max {Math.round(weather.main.temp_max)}°
                </p>
              </div>
              <div className="mt-5">
                <Button
                  variant="outline-success"
                  onClick={() => addLikedCity({ name: weather.name, lat: weather.coord.lat, lon: weather.coord.lon })}
                >
                  Aggiungi ai preferiti
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default ActualWeather;
