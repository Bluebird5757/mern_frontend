import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

function BsCards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="pics/img1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"> Details</Button>
      </Card.Body>
    </Card>
  );
}

export default BsCards;