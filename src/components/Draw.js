import React from 'react'
import { Link } from 'react-router-dom'
import InterpretationsContainer from '../containers/InterpretationsContainer'
 
const Draw = props =>{ 

  let draw = props.draws.draws[props.match.params.id - 1]

    return(
      <div className="Field">
        Layout: {draw ? draw.layout: null}<br></br>
        {draw && (props.cards.length > 0) ? <img src={props.cards[draw.card - 1].image}/> : null}<br></br>
        Card Name: {draw  && (props.cards.length > 0) ? <Link to={`/cards/${props.cards[draw.card - 2].id}`}>{props.cards[draw.card - 1].name}</Link> : null}
        <InterpretationsContainer draw={draw} />
      </div>
    )
  }
  export default Draw


  
