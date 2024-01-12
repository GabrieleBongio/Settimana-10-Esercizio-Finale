import { Carousel, Container, Row } from "react-bootstrap";
import SingleWeatherElement from "./SingleWeatherElement";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ForecastWeather = (props) => {
  const params = useParams();
  const coordinate = params.latlon;
  const arrayCoordinate = coordinate.split(",");
  const lat = arrayCoordinate[0];
  const lon = arrayCoordinate[1];

  const [forecast, setForecast] = useState(null);

  const fetchForecast = async () => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=c7eb58c53c4549092002fa6af4a424cf&lang=it&units=metric"
      );
      if (resp.ok) {
        const fetchedForecast = await resp.json();
        console.log(fetchedForecast);
        setForecast(fetchedForecast);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchForecast();
    // eslint-disable-next-line
  }, []);

  if (forecast) {
    return (
      <>
        <h5 className="mt-3 fw-light fs-3">Prossime previsioni:</h5>
        <Carousel className="mt-2">
          <Carousel.Item interval={20000}>
            <Container>
              <Row>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[0]}
                  date={new Date(forecast.list[0].dt * 1000)}
                ></SingleWeatherElement>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[1]}
                  date={new Date(forecast.list[1].dt * 1000)}
                ></SingleWeatherElement>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[2]}
                  date={new Date(forecast.list[2].dt * 1000)}
                ></SingleWeatherElement>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item interval={20000}>
            <Container>
              <Row>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[3]}
                  date={new Date(forecast.list[3].dt * 1000)}
                ></SingleWeatherElement>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[4]}
                  date={new Date(forecast.list[4].dt * 1000)}
                ></SingleWeatherElement>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[5]}
                  date={new Date(forecast.list[5].dt * 1000)}
                ></SingleWeatherElement>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item interval={20000}>
            <Container>
              <Row>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[6]}
                  date={new Date(forecast.list[6].dt * 1000)}
                ></SingleWeatherElement>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[7]}
                  date={new Date(forecast.list[7].dt * 1000)}
                ></SingleWeatherElement>
                <SingleWeatherElement
                  imagesAndIcons={props.imagesAndIcons}
                  item={forecast.list[8]}
                  date={new Date(forecast.list[8].dt * 1000)}
                ></SingleWeatherElement>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
};

export default ForecastWeather;
