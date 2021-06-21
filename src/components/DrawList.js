
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

class DrawList extends React.Component{
// debugger  
state = {
    layout: "",
    card_ids: [],
    orientations: []
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

render(){
  if(this.state.layout == ""){
    return(
      <div >
      <Container className="themed-container" fluid="md">
  
          <form className="center" onSubmit={e => this.handleSumbit(e)}>
            <select onChange={this.handleChange} name="layout" value={this.state.layout}>
              <option>All Spreads</option>
              <option>One-Card</option>
              <option>Three-Cards</option>
              <option>Five-Cards</option>
              <option>Celtic Cross</option>
            </select>
          </form>
    
          <div className="center">{this.props.draws.draws ? this.props.draws.draws.map(draw => 
   
          <div key={draw.id}>
            <Link to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
          ) : null}
          </div>
   
      </Container>
      <img className="back" src="tarotback.jpg"/>  
      </div>

    )
  }else if(this.state.layout == "Celtic Cross"){
    const fullList = this.props.draws.draws
    const filterList = fullList.filter(draw => draw.layout == this.state.layout)
    return(
      <div >
         <Container className="themed-container" fluid="md">
          <form className="center" onSubmit={e => this.handleSumbit(e)}>
            <select onChange={this.handleChange} name="layout" value={this.state.layout}>
              <option>One-Card</option>
              <option>Three-Cards</option>
              <option>Five-Cards</option>
              <option>Celtic Cross</option>
            </select>
          </form>
  
        <div className="center" >{this.props.draws.draws ? filterList.map(draw => <div key={draw.id}>
            <Link to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
          ) : null}</div>
  
  </Container>
      <img className="back" src="tarotback.jpg"/>  
      </div>
    )
  }else if(this.state.layout == "Five-Cards"){
    const fullList = this.props.draws.draws
    const filterList = fullList.filter(draw => draw.layout == this.state.layout)
    return(
      <div >
         <Container className="themed-container" fluid="md">
          <form onSubmit={e => this.handleSumbit(e)}>
            <select onChange={this.handleChange} name="layout" value={this.state.layout}>
              <option>One-Card</option>
              <option>Three-Cards</option>
              <option>Five-Cards</option>
              <option>Celtic Cross</option>
            </select>
          </form>
  
        <div>{this.props.draws.draws ? filterList.map(draw => <div key={draw.id}>
            <Link to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
          ) : null}</div>
  
  </Container>
      <img className="back" src="tarotback.jpg"/>  
      </div>
    )
  }else if(this.state.layout == "Three-Cards"){
    const fullList = this.props.draws.draws
    const filterList = fullList.filter(draw => draw.layout == this.state.layout)
    return(
      <div >
         <Container className="themed-container" fluid="md">
          <form onSubmit={e => this.handleSumbit(e)}>
            <select onChange={this.handleChange} name="layout" value={this.state.layout}>
              <option>One-Card</option>
              <option>Three-Cards</option>
              <option>Five-Cards</option>
              <option>Celtic Cross</option>
            </select>
          </form>
  
        <div>{this.props.draws.draws ? filterList.map(draw => <div key={draw.id}>
            <Link to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
          ) : null}</div>
  
  </Container>
      <img className="back" src="tarotback.jpg"/>  
      </div>
    )
  
}else if(this.state.layout == "One-Card"){
  const fullList = this.props.draws.draws
  const filterList = fullList.filter(draw => draw.layout == this.state.layout)
  return(
    <div >
       <Container className="themed-container" fluid="md">
        <form onSubmit={e => this.handleSumbit(e)}>
          <select onChange={this.handleChange} name="layout" value={this.state.layout}>
            <option>One-Card</option>
            <option>Three-Cards</option>
            <option>Five-Cards</option>
            <option>Celtic Cross</option>
          </select>
        </form>

      <div>{this.props.draws.draws ? filterList.map(draw => <div key={draw.id}>
          <Link to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
        ) : null}</div>

</Container>
      <img className="back" src="tarotback.jpg"/>  
      </div>
  )
}

}}

export default DrawList
