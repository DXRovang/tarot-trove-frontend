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
       
       <div className="block">{draw.card_ids.map(card_id => <div key={card_id.id}> 
       <Link to={`/cards/${card_id - 1}`}>
        {draw.orientations[card_id - 1] == false ? 
        // className="flip" 
         <img className="flip card" src={props.cards[card_id -1].image}/>
         : <img className="card" src={props.cards[card_id - 1].image}/>}
       </Link></div>)}</div>

        : null}<br></br> 

        <InterpretationsContainer className="ints" draw={draw} />
      </div>
    )
  }
  export default Draw


