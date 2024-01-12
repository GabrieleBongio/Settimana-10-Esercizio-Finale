import { Button, Card, Col } from "react-bootstrap";

const CityCard = (props) => {
  return (
    <Col xs={4}>
      <Card>
        <Card.Body>
          <Card.Title>{props.city.name}</Card.Title>
          <Card.Text>
            {props.city.state} - {props.city.country}
          </Card.Text>
          <Button variant="outline-info">Più dettagli</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CityCard;
