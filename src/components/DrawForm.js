import React from 'react'
import { connect } from 'react-redux'
import { createDraws } from '../actions/createDraws'

class DrawForm extends React.Component{

  state = {
    layout: "One-Card",
    card_ids: [],
    orientations: []
  }

  getOneCard = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item.id;
  }
  randBool = () => {
    const rb = Math.random() < 0.5;
    return rb;
  }

  handleSumbit = (e) =>{
    e.preventDefault() 
    if(this.state.layout === "One-Card"){
    let formData = {
      layout: this.state.layout,
      card_ids: [this.getOneCard(this.props.cards)],
      orientations: [this.randBool()]
     }
     this.props.createDraws(formData)
     this.props.history.push('/draws')
    }else{
       console.log("here")
  }
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


  // getThreeCards = (arr) => {
  //   const randomIndex = Math.floor(Math.random() * arr.length);
  //   const item = arr[randomIndex];
  //   return item.id;
  // }

  // getFiveCards = (arr) => {
  //   const randomIndex = Math.floor(Math.random() * arr.length);
  //   const item = arr[randomIndex];
  //   return item.id;
  // }

  // getCelticCross = (arr) => {
  //   const randomIndex = Math.floor(Math.random() * arr.length);
  //   const item = arr[randomIndex];
  //   return item.id;
  // }




      // }else if(this.state.layout === "Five-Card"){
    //   let formData = {
    //     layout: this.state.layout,
    //     card_ids: this.getFiveCards(this.props.cards),
    //     orientations: []
    //    }
    //    this.props.createDraws(formData)
    //    this.props.history.push('/draws')
    // }else if(this.state.layout === "Celtic Cross"){
    //   let formData = {
    //     layout: this.state.layout,
    //     card_ids: this.getCelticCross(this.props.cards),
    //     orientations: []
    //    }
    //    this.props.createDraws(formData)
    //    this.props.history.push('/draws')