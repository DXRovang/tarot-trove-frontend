import React from 'react'
import {Link} from 'react-router-dom'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

const MajorArcana = props =>{
// debugger
  return(
    <CardGroup>
        <div>{props.cards.slice(0,21).map(card => 

        <Card key={card.id}>
          <Link to={`/cards/${card.id - 1}`}>
            <CardImg top width="100%" src={card.image} />
            <CardBody>          
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Link>
        </Card>

        )}</div>
    </CardGroup>
  )
}

export default MajorArcana