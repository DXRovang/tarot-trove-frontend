export const deleteInterpretations = (drawID, interpretationID) =>{
  return (dispatch) => {
    fetch(`https://tarot-trove-backend.herokuapp.com/api/v1/draws/${drawID}/interpretations/${interpretationID}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(draw=> dispatch({
      type: "DELETE_INTERPRETATION", 
      payload: draw
    }))
  }
}