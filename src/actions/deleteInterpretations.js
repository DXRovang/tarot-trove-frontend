export const deleteInterpretations = (drawID, interpretationID) =>{
  return (dispatch) => {
    fetch(`http://127.0.0.1:3000/api/v1/draws/${drawID}/interpretations/${interpretationID}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(draw=> dispatch({
      type: "DELETE_INTERPRETATION", 
      payload: draw
    }))
  }
}