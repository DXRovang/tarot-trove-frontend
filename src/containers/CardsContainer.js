
import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import Card from '../components/Card'
import { fetchCards } from '../actions/fetchCards'
import MajorArcana from '../components/MajorArcana'
import MinorArcana from '../components/MinorArcana'


class CardsContainer extends React.Component{

componentDidMount(){
  this.props.fetchCards()
}

    render(){
      return(
        <>
        {/* <HashRouter basename='/'> */}
          <Switch>
            <Route exact path='process.env.PUBLIC_URL + /cards'>
                <CardList cards={this.props.cards}/>
            </Route>
            <Route path='process.env.PUBLIC_URL + /cards/:id' render={(routerProps) => 
                <Card {...routerProps} cards={this.props.cards} />}/>
            <Route path='process.env.PUBLIC_URL + /majorarcana'>
                <MajorArcana cards={this.props.cards}/>
            </Route>
            <Route path='process.env.PUBLIC_URL + /minorarcana'>
                <MinorArcana cards={this.props.cards}/>
            </Route>
          </Switch>
        {/* </HashRouter> */}
        </>
      )
    }
}

const mapStateToProps = (state) =>{
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps, {fetchCards})(CardsContainer)