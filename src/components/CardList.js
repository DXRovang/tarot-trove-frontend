import React from 'react'

const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

const CardList = props =>{

  const card = getRandomItem(props.cards);

  return(
    <div className="Field">
      <div className="left">
    Name: {card ? card.name: null} - Type: {card ? card.cardType : null}</div><br></br>
    {card ? <img className="card left" src={card.image}/> : null}<br></br>
    <div className="single left">
    <div className="space">Meaning(up): {card ? card.meaning_up : null}</div>
    <div className="space">Meaning(rev): {card ? card.meaning_rev : null}</div><br></br>
    <div className="space">Summary: {card ? card.summary : null}</div></div>
  </div>
  )
}

export default CardList