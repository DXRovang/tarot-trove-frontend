import React from 'react';
import DrawsContainer from './containers/DrawsContainer'
import CardsContainer from './containers/CardsContainer'
import NavBar from './NavBar'
import { Container, Row, Col } from 'reactstrap';
class App extends React.Component {

  render(){
    return (
      <div className="App">
        <NavBar/>
          <div className="title">
            {/* <Col lg={{ size: 28, order: 2, offset: 5 }}> */}
            Tarot Trove
            {/* </Col> */}
          </div>
        <DrawsContainer />
        <CardsContainer />
      </div>
    );
  }

}

export default App


