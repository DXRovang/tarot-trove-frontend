import React from 'react'
import {Link} from 'react-router-dom'

const MajorArcana = props =>{

  return(
    <div className="Field">
        <div>{props.cards.slice(0,22).map(card => 
        <div key={card.id}>
          <Link to={`/cards/${card.id - 1}`}><img className="display" src={card.image}/></Link>
        </div>
        )}</div>
    </div>
  )
}

export default MajorArcana