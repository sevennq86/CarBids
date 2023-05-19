import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carreragt from '../assets/carreragt.jpeg'

export default function Tile() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"
        src={carreragt}
        rounded
      />
      <Card.Body>
        <Card.Title>Make and Model</Card.Title>
        <Card.Text>
          description and location of vehicle
        </Card.Text>
        <Button variant="primary">view vehicle</Button>
        <Button variant="secondary">Make a Bid</Button>

      </Card.Body>
    </Card>
  );
}



        // picture
        // Price: $
        // Days Left:
        // Location: 


