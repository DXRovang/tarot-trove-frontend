import React from 'react'

const Card = props =>{
  let card = props.cards[props.match.params.id]
  
  return(
    <div className="Field">
    Name: {card ? card.name: null} - Type: {card ? card.cardType : null}<br></br>
    {card ? <img src={card.image}/> : null}<br></br>
    <div className="space">Meaning(up): {card ? card.meaning_up : null}</div>
    <div className="space">Meaning(rev): {card ? card.meaning_rev : null}</div><br></br>
    <div className="space">Summary: {card ? card.summary : null}</div>
  </div>
  )
}

export default Card