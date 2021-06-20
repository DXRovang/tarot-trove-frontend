import React from 'react'
import {Link} from 'react-router-dom'
import {
  Card, Container, Row, Col, CardImg, CardTitle,
  CardSubtitle, CardBody
} from 'reactstrap';

const MajorArcana = props =>{
  return(

    <Container>
            <Row>
        <div>{props.cards.slice(0,1).map(card => 
        <Col>
          <Card key={card.id}>
            <Link to={`/cards/${card.id - 1}`}>
              <CardImg top width="100%" src={card.image} />
              <CardBody>          
                <CardTitle tag="h5">{card.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{card.id - 1}</CardSubtitle>
              </CardBody>
            </Link>
          </Card>
        </Col>
       )}</div>
      </Row>
      <Row>
        <div>{props.cards.slice(1,8).map(card => 
        <Col>
          <Card key={card.id}>
            <Link to={`/cards/${card.id - 1}`}>
              <CardImg top width="100%" src={card.image} />
              <CardBody>          
                <CardTitle tag="h5">{card.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{card.id - 1}</CardSubtitle>
              </CardBody>
            </Link>
          </Card>
        </Col>
       )}</div>
      </Row>
      <Row>
        <div>{props.cards.slice(8,15).map(card => 
        <Col>
          <Card key={card.id}>
            <Link to={`/cards/${card.id - 1}`}>
              <CardImg top width="100%" src={card.image} />
              <CardBody>          
                <CardTitle tag="h5">{card.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{card.id - 1}</CardSubtitle>    
              </CardBody>
            </Link>
          </Card>
        </Col>
       )}</div>
      </Row>
      <Row>
        <div>{props.cards.slice(15,22).map(card => 
        <Col>
          <Card key={card.id}>
            <Link to={`/cards/${card.id - 1}`}>
              <CardImg top width="100%" src={card.image} />
              <CardBody>          
                <CardTitle tag="h5">{card.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{card.id - 1}</CardSubtitle>
              </CardBody>
            </Link>
          </Card>
        </Col>
       )}</div>
      </Row>
  
    </Container>
  )
}

export default MajorArcana


    // <CardGroup>
    //   <div>{props.cards.slice(0,21).map(card => 
    //     <Card key={card.id}>
    //       <Link to={`/cards/${card.id - 1}`}>
    //         <CardImg top width="100%" src={card.image} />
    //         <CardBody>          
    //           <CardTitle tag="h5">{card.name}</CardTitle>
    //           <CardSubtitle tag="h6" className="mb-2 text-muted">{card.id - 1}</CardSubtitle>
    //           <CardText>This is a wider card with supporting text below.</CardText>
    //           <Button>Button</Button>
    //         </CardBody>
    //       </Link>
    //     </Card>
    //    )}</div>
    // </CardGroup>