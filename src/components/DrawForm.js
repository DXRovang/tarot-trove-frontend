import React from 'react'
import { connect } from 'react-redux'
import { createDraws } from '../actions/createDraws'


class DrawForm extends React.Component{

  state = {
    layout: "One-Card",
    card_ids: [],
    orientations: []
  }

  render() {
    return(
      <>
      <div className="center drawlist">
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
      {/* <img className="back"src="tarotback.jpg"/>  */}
      
      </>
    )
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // would like to do this as a switch
  handleSumbit = (e) =>{
    e.preventDefault() 
    
    if(this.state.layout == "One-Card"){
    let formData = {
      layout: this.state.layout,
      card_ids: [this.getOneCard(this.props.cards)],
      orientations: [this.randBool()]
     }
     this.props.createDraws(formData)
     this.props.history.push(process.env.PUBLIC_URL +'/draws')
    }else if(this.state.layout == "Three-Cards"){
      let formData = {
        layout: this.state.layout,
        card_ids: this.getThreeCards(this.props.cards),
        orientations: this.threeBool()
       }
       this.props.createDraws(formData)
       this.props.history.push('/draws')
    }else if(this.state.layout == "Five-Cards"){
      let formData = {
        layout: this.state.layout,
        card_ids: this.getFiveCards(this.props.cards),
        orientations: this.fiveBool()
       }
       this.props.createDraws(formData)
       this.props.history.push('/draws')
    }else if(this.state.layout == "Celtic Cross"){
      let formData = {
        layout: this.state.layout,
        card_ids: this.getTenCards(this.props.cards),
        orientations: this.tenBool()
       }
       this.props.createDraws(formData)
       this.props.history.push(process.env.PUBLIC_URL +'/draws')
    }
  }
  
  // look into refactoring down to 2 methods
  getOneCard = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item.id;
  }
  randBool = () => {
    const rb = Math.random() < 0.5;
    return rb;
  }
  // how does this work??
  getThreeCards = (arr) => {
    const base = [];
    while(base.length < 3){
      const r = Math.floor(Math.random() * arr.length);
      if(base.indexOf(r) === -1) base.push(r);
    }
    return base;
  }
  threeBool = () => {
    const base = []
    while(base.length < 3){
      base.push(this.randBool())
    }
    return base
  }
  getFiveCards = (arr) => {
    const base = [];
    while(base.length < 5){
      const r = Math.floor(Math.random() * arr.length);
      if(base.indexOf(r) === -1) base.push(r);
    }
    return base;
  }
  fiveBool = () => {
    const base = []
    while(base.length < 5){
      base.push(this.randBool())
    }
    return base
  }
  getTenCards = (arr) => {
    const base = [];
    while(base.length < 10){
      const r = Math.floor(Math.random() * arr.length);
      if(base.indexOf(r) === -1) base.push(r);
    }
    return base;
  }
  tenBool = () => {
    const base = []
    while(base.length < 10){
      base.push(this.randBool())
    }
    return base
  }


}

export default connect(null,{createDraws})(DrawForm)


// handleSumbit = (e) =>{
  //   e.preventDefault() 
  //   switch(this.state.layout){
  //     case "One-Card":
  //     let formData = {
  //       layout: this.state.layout,
  //       card_ids: [this.getOneCard(this.props.cards)],
  //       orientations: [this.randBool()]
  //     }
  //   case "Three-Cards":
  //     let formData = {
  //       layout: this.state.layout,
  //       card_ids: this.getThreeCards(this.props.cards),
  //       orientations: this.threeBool()
  //      }
  //   case "Five-Cards":
  //     let formData = {
  //       layout: this.state.layout,
  //       card_ids: this.getFiveCards(this.props.cards),
  //       orientations: this.fiveBool()
  //      }
  //     }
  //      this.props.createDraws(formData)
  //      this.props.history.push('/draws')
    
  // }