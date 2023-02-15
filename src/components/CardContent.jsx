import React from 'react';
import Card from 'react-bootstrap/Card';
import "../css/CardContent.css";

function BasicExample({source,alt,title,text}) {
  return (
    <Card className='card-content'>
      <Card.Img className="card-image" variant="top" src={require(`../img/spaceships/spaceship_${source}.svg`)} alt={alt} />
      <Card.Body className='bg-dark'>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text className="card-text text-white">
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;