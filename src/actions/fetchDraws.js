export function fetchDraws(){
  return (dispatch) => {
    fetch('https://tarot-trove-backend.herokuapp.com/api/v1/draws')
    .then(r=>r.json())
    .then(draws=> dispatch({
      type: "FETCH_DRAWS", 
      payload: draws
    }))
  }
}
