export function fetchCards(){
  return (dispatch) => {
    fetch('http://127.0.0.1:3000/api/v1/cards')
    .then(r=>r.json())
    .then(cards=> dispatch({
      type: "FETCH_CARDS", 
      payload: cards
    }))
  }
}