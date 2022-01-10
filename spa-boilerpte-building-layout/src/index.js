import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM
import { Card, Button } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const data = {
  image:
    "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
  cardTitle: "Bob Dylan",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/

const content = (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={data.image} alt={data.cardTitle} />
    <Card.Body>
      <Card.Title>{data.cardTitle}</Card.Title>
      <Card.Text>
        {data.cardDescription}
      </Card.Text>
      <a href={data.button.url}><Button variant="primary">{data.button.label}</Button></a>
    </Card.Body>
  </Card>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
