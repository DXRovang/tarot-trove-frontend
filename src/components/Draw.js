import React from 'react'
import { Link } from 'react-router-dom'
import InterpretationsContainer from '../containers/InterpretationsContainer'
 
const Draw = props =>{ 

  let draw = props.draws.draws[props.match.params.id - 1]
// debugger
    return(
      <div>
        Layout: {draw ? draw.layout: null}<br></br>

        {draw && (props.cards.length > 0) ? 
       
       <div>{draw.card_ids.map(card_id => <div key={card_id.id}> <img src={props.cards[card_id - 1].image}/></div>)}</div>
        : null}<br></br> 

        {/* 
        <Link to={`/cards/${props.cards[draw.card - 2].id}`}>{props.cards[draw.card - 1].name}</Link>
         */}
        
        <InterpretationsContainer draw={draw} />
      </div>
    )
  }
  export default Draw


