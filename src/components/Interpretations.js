import React from 'react'
import { connect } from 'react-redux'
import { deleteInterpretations } from '../actions/deleteInterpretations'
import Button from './Button'

class Interpretations extends React.Component{

  state = {
    liked: 0
  }

 


  // handleDelete = (interpretation) =>{
  // this.props.deleteInterpretations(interpretation.draw_id, interpretation.id)
  //   }
 
  render(){
    // debugger
  return (
    
    <div>
      Interpretation(s): 
      {this.props.draw ? this.props.draw.interpretations.map(interpretation => 
        <li key={interpretation.id}>
          <Button />
          {interpretation.body} 
          {/* <button onClick={() => handleDelete(interpretation)}>x</button> */}
          </li>) : null}<br></br>
    </div>
  )
}}

export default connect(null,{ deleteInterpretations })(Interpretations)
