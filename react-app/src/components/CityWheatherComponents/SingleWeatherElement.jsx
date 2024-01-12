import { Col } from "react-bootstrap";

const SingleWeatherElement = (props) => {
  return (
    <Col xs={4}>
      <div className="border border-1 rounded-3 py-3">
        <div className="mt-2">
          <img src={props.imagesAndIcons[props.item.weather[0].icon].iconElem} alt="..." className="img-small" />
        </div>
        <div className="mt-2">
          <h2 className="display-4">{Math.round(props.item.main.temp)}°</h2>
        </div>
        <div className="mt-2">
          <p className="mb-1">
            {props.date.getDate()}/
            {props.date.getMonth() + 1 < 10 ? "" + props.date.getMonth() + 1 : props.date.getMonth() + 1}/
            {props.date.getFullYear()}
          </p>
          <p>{props.date.getHours()}:00</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleWeatherElement;
