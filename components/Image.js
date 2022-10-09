import Card from "react-bootstrap/Card";
import "../styles/Image.css";

export const Image = ({img, cssclass, desc }) => {
    return (
      <div className="events">
        <div className="div">
          <div className='div-overlay'></div>
      <div className='div2-overlay'></div>
      </div>
      <div className="first">
        <Card style={{ width: "12 rem" }} className="cardimg">
          <Card.Link href="#">
            <Card.Img variant="top" src={img} className={cssclass}/>
          </Card.Link>
          <Card.Body>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    );

};
export default Image;

