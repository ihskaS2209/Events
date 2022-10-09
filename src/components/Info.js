import Card from 'react-bootstrap/Card';
import "../styles/Info.css"

function TextExample({team}) {
  return (
    <Card style={{ width: '100%' }} className="info">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {team}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;