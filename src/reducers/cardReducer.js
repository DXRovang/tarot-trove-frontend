export default function cardReducer(state = [], action){
  switch(action.type){
    case "FETCH_CARDS":
      return action.payload
    default:
        return state
  }
}