import React from 'react'
import {Link} from 'react-router-dom'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
   CardBody
} from 'reactstrap';

const MinorArcana = props =>{
// debugger
  return(    <CardGroup>
    <div>{props.cards.slice(24,78).map(card => 

    <Card key={card.id}>
      <Link to={`/cards/${card.id - 1}`}>
        <CardImg top width="100%" src={card.image} />
        <CardBody>          
          <CardTitle tag="h5">{card.name}</CardTitle>
          <CardText>{card.summary}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Link>
    </Card>

    )}</div>
</CardGroup>

  )
}

export default MinorArcana