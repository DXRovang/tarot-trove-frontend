import React from 'react'
import { Link } from 'react-router-dom'
import InterpretationsContainer from '../containers/InterpretationsContainer'
 
const Draw = props =>{ 

  let draw = props.draws.draws.find(draw => draw.id == props.match.params.id)

    return(
      <div>
        Layout: {draw ? draw.layout: null}<br></br>

        {draw && (props.cards.length > 0) ? 
       
       <div className="block">{draw.card_ids.map((card_id, i) => <div key={card_id.id}> 
       
       <Link to={`/cards/${card_id - 1}`}>
        {draw.orientations[i] === false ? 
         <img className="flip card" src={props.cards[card_id -1].image}/>
         : <img className="card" src={props.cards[card_id - 1].image}/>}
       </Link></div>)}</div>

        : null}<br></br> 

        <InterpretationsContainer className="ints" draw={draw} />
      </div>
    )
  }
  export default Draw


