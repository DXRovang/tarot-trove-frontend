export function fetchCards(){
  return (dispatch) => {
    fetch('https://tarot-trove-backend.herokuapp.com/api/v1/cards')
    .then(r=>r.json())
    .then(cards=> dispatch({
      type: "FETCH_CARDS", 
      // look at this
      payload: cards.sort((a,b)=>a.id - b.id)
    }))
  }
}