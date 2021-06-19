import React from 'react'

const Card = props =>{
  // debugger
  let card = props.cards[props.match.params.id]
  
  return(
    <div>
    Name: {card ? card.name: null} - Type: {card ? card.cardType : null}<br></br>
    {card ? <img src={card.image}/> : null}<br></br>
    <div>Description: {card ? card.desc : null}</div><br></br>
    <div>Meaning(up): {card ? card.meaning_up : null}</div><br></br>
    <div>Meaning(rev): {card ? card.meaning_rev : null}</div><br></br>
    <div>Summary: {card ? card.summary : null}</div>
  </div>
  )
}

export default Card