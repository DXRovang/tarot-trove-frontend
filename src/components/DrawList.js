
import React from 'react'
import {Link} from 'react-router-dom'
// import { Container } from 'reactstrap';

class DrawList extends React.Component{
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
  if(this.state.layout == "" || this.state.layout == "All Spreads"){
    return(
      <>
      <div className="blurb left drawlist">
        <p>Welcome!   </p>
        
        <p>This page is intended to aid in the study of Tarot Divination.</p>

        <p>You're welcome to browse our previous draws and add your own thoughts, <br></br>
          or create a brand new draw and be the first to offer an interpretation.
        </p>
        <p>We hope you enjoy the site!</p>
      </div>
      <div className='themed-container'>
      {/* <Container className="themed-container" fluid="md"> */}
      
          <form className="right list option drawlist" onSubmit={e => this.handleSumbit(e)}>
            <select onChange={this.handleChange} name="layout" value={this.state.layout}>
              <option >All Spreads</option>
              <option >One-Card</option>
              <option >Three-Cards</option>
              <option >Five-Cards</option>
              <option >Celtic Cross</option>
            </select>
          </form><br></br>
    
          <div className="right list">{this.props.draws.draws ? this.props.draws.draws.map(draw => 
   
          <div key={draw.id}>
            <Link className="list" to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
          ) : null}
          </div>
   
      {/* </Container> */}
      {/* <img className="back right" src="./assets/tarotback.jpg"/>   */}
      </div>
</>
    )
  }else{
    const fullList = this.props.draws.draws
    const filterList = fullList.filter(draw => draw.layout == this.state.layout)
    return(     <>
      <div className="blurb left drawlist">
        <p>Welcome!</p>
        
        <p>This page is intended to aid in the study of Tarot Divination.</p>

        <p>You're welcome to browse our previous draws
          and add your own thoughts, <br></br>
          or create a brand new draw and be the first to offer an interpretation.
        </p>
        <p>We hope you enjoy the site!</p>
      </div>
      <div className='themed-container'>
        
         {/* <Container className="themed-container" fluid="md"> */}
          <form className="drawlist right list option" onSubmit={e => this.handleSumbit(e)}>
            <select onChange={this.handleChange} name="layout" value={this.state.layout}>
              <option >All Spreads</option>
              <option >One-Card</option>
              <option >Three-Cards</option>
              <option >Five-Cards</option>
              <option >Celtic Cross</option>
            </select>
          </form><br></br>
  
        <div className="right list" >{this.props.draws.draws ? filterList.map(draw => <div key={draw.id}>
            <Link className="list" to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
          ) : null}</div>
  
  {/* </Container> */}
      {/* <img className="back right readimg" src="tarotback.jpg"/>   */}
      </div></>
    )

}

}}

export default DrawList

