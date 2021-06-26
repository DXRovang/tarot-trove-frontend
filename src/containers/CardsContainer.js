
import React from 'react'
import {Route, Switch} from 'react-router-dom'
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
        <div>
          <Switch>
            <Route exact path='tarot-trove-frontend/cards'>
                <CardList cards={this.props.cards}/>
            </Route>
            <Route path='tarot-trove-frontend/cards/:id' render={(routerProps) => 
                <Card {...routerProps} cards={this.props.cards} />}/>
            <Route path='tarot-trove-frontend/majorarcana'>
                <MajorArcana cards={this.props.cards}/>
            </Route>
            <Route path='tarot-trove-frontend/minorarcana'>
                <MinorArcana cards={this.props.cards}/>
            </Route>
          </Switch>
        </div>
      )
    }
}

const mapStateToProps = (state) =>{
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps, {fetchCards})(CardsContainer)