export const createInterpretations = (interpretation, drawID) =>{
  return (dispatch) => {
    fetch(`http://tarot-trove-backend.herokuapp.com/api/v1/draws/${drawID}/interpretations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
      body: JSON.stringify(interpretation)
    })
    .then(r=>r.json())
    .then(draw=> dispatch({
      type: "CREATE_INTERPRETATIONS", 
      payload: draw
    }))
  }
}