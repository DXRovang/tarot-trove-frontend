import React from 'react'
import { connect } from 'react-redux'
import { createDraws } from '../actions/createDraws'

class DrawForm extends React.Component{

  state = {
    layout: "One-Card",
    card: ""
  }

  getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item.id;
  }

  handleSumbit = (e) =>{
    e.preventDefault()
    let formData = {
      layout: this.state.layout,
      card: this.getRandomItem(this.props.cards)
     }
    this.props.createDraws(formData)
    // you need this.props for dispatch to work
    this.props.history.push('/draws')
  }
    
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
      // 26:00 Expense part6, whichever onChange is used will get sent here
    })
  }

  render() {
    return(
  
      <div className="Field">
        <form onSubmit={e => this.handleSumbit(e)}>
          <select onChange={this.handleChange} name="layout" value={this.state.layout}>
            <option>One-Card</option>
            <option>Three-Cards</option>
            <option>Five-Cards</option>
            <option>Celtic Cross</option>
          </select>
          <button>Draw Cards</button>
        </form>
      </div>
    
    )
  }
}

export default connect(null,{createDraws})(DrawForm)