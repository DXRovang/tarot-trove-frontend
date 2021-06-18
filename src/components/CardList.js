import React from 'react'

const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

const CardList = props =>{

  const card = getRandomItem(props.cards);
  // (Math.random() < 0.5) ? card.reversed = true : card.reversed = false

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

export default CardList