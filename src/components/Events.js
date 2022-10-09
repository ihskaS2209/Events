import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './Image';
import "../styles/Event.css";
import { useEffect, useState } from "react";
import { API_CLIENT } from "../shared/services/api-client";
import TextExample from './Info';
import Card from "react-bootstrap/Card";

export const ResponsiveExample= ()=>{
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const promise = API_CLIENT.get(process.env.REACT_APP_EVENT_URL);
    promise
      .then((result) => {
        console.log("Data ", result.data.PreviousEvents);
        setInfo(result.data.PreviousEvents);
      })
      .catch((err) => console.log("Network Err ", err));
  }, []);

function createCard(previous) {
  return (
    <Container className='grid'>
      {/* <Row> */}
        <Col className="mx-auto grid-item">
          {<Image img={previous.img_url} cssclass="image1" desc={previous.description}/>}
          <br/>          
          {<TextExample team={previous.team_info}/>}
          <br/>
        </Col>
    </Container>
  );
}
return(<><Card>
  {info.map((previous)=>{
    return createCard(previous);
  })}</Card></>)
}

export default ResponsiveExample;