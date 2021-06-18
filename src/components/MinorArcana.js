import React from 'react'
import {Link} from 'react-router-dom'

const MinorArcana = props =>{

  return(
    <div className="Field">
        <div>{props.cards.slice(23,78).map(card => 
        <div key={card.id}>
          <Link to={`/cards/${card.id - 1}`}><img className="display" src={card.image}/></Link></div>
        )}</div>
    </div>
  )
}

export default MinorArcana