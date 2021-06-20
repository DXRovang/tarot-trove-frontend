import React from 'react'
import { Link } from 'react-router-dom'
import InterpretationsContainer from '../containers/InterpretationsContainer'
import {
  Card, Container, Row, Col, CardImg, CardTitle, 
   CardBody
} from 'reactstrap';
 
const Draw = props =>{ 

  let draw = props.draws.draws.find(draw => draw.id == props.match.params.id)

  if(draw && draw.layout == "One-Card"){
    return(
      <div>
        Layout: {draw ? draw.layout: null}<br></br>
        {draw && (props.cards.length > 0) ? 
          <div>{draw.card_ids.map((card_id, i) => 
            <div key={card_id.id}> 
              <Link to={`/cards/${card_id - 1}`}>
                {draw.orientations[i] === false ? 
                <img className="flip card" src={props.cards[card_id -1].image}/>
                : <img className="card" src={props.cards[card_id - 1].image}/>}
              </Link>
            </div>)}
          </div>
        : null}
        <InterpretationsContainer draw={draw} />
      </div>)
    }else if(draw && draw.layout == "Three-Cards"){
      return(
        <div>
          Layout: {draw ? draw.layout: null}<br></br>
          {draw && (props.cards.length > 0) ? 
            <div>{draw.card_ids.map((card_id, i) => 
              <div key={card_id.id}> 
                <Link to={`/cards/${card_id - 1}`}>
                  {draw.orientations[i] === false ? 
                  <img className="flip card" src={props.cards[card_id -1].image}/>
                  : <img className="card" src={props.cards[card_id - 1].image}/>}
                </Link>
              </div>)}
            </div>
          : null}
          <InterpretationsContainer draw={draw} />
        </div>)
    }else if(draw && draw.layout == "Five-Cards"){
      return(
        <div>
          Layout: {draw ? draw.layout: null}<br></br>
          {draw && (props.cards.length > 0) ? 
            <div>{draw.card_ids.map((card_id, i) => 
              <div key={card_id.id}> 
                <Link to={`/cards/${card_id - 1}`}>
                  {draw.orientations[i] === false ? 
                  <img className="flip card" src={props.cards[card_id -1].image}/>
                  : <img className="card" src={props.cards[card_id - 1].image}/>}
                </Link>
              </div>)}
            </div>
          : null}
          <InterpretationsContainer draw={draw} />
        </div>)
    }else if(draw && draw.layout == "Celtic Cross"){
      return(
        // CELTIC CROSS
        <Container>
          {draw && (props.cards.length > 0) ? 
          <Container>

            <Row>
            <Col sm={{ size: true, offset: 4 }}>
              <div key={draw.card_ids[0].id}>
                <Link to={`/cards/${draw.card_ids[0] - 1}`}>
                      {draw.orientations[0] === false ? 
                      <img className="flip card" src={props.cards[draw.card_ids[0] -1].image}/>
                      : <img className="card" src={props.cards[draw.card_ids[0] - 1].image}/>}
                </Link>
              </div>
            </Col>
            <Col sm={{ size: true, offset: 4 }}>
              <div key={draw.card_ids[1].id}>
                <Link to={`/cards/${draw.card_ids[1] - 1}`}>
                      {draw.orientations[1] === false ? 
                      <img className="flip card" src={props.cards[draw.card_ids[1] -1].image}/>
                      : <img className="card" src={props.cards[draw.card_ids[1] - 1].image}/>}
                </Link>
              </div>
            </Col>
            </Row>

            <Row>
            <Col 
            // sm={{ size: true, offset: 1}}
            >
              <div key={draw.card_ids[2].id}>
                <Link to={`/cards/${draw.card_ids[2] - 1}`}>
                      {draw.orientations[2] === false ? 
                      <img className="flip card" src={props.cards[draw.card_ids[2] -1].image}/>
                      : <img className="card" src={props.cards[draw.card_ids[2] - 1].image}/>}
                </Link>
              </div>
            </Col>
            <Col sm={{ size: true, offset: 2}}>
              <div key={draw.card_ids[3].id}>
                <Link to={`/cards/${draw.card_ids[3] - 1}`}>
                      {draw.orientations[3] === false ? 
                      <img className="flip card base" src={props.cards[draw.card_ids[3] -1].image}/>
                      : <img className="card base" src={props.cards[draw.card_ids[3] - 1].image}/>}
                </Link>
              </div>
            </Col>
            <Col 
            // sm={{ size: true, offset: 2}}
            >
              <div key={draw.card_ids[4].id}>
                <Link to={`/cards/${draw.card_ids[4] - 1}`}>
                      {draw.orientations[4] === false ? 
                      <img className="flip card cross" src={props.cards[draw.card_ids[4] -1].image}/>
                      : <img className="card cross" src={props.cards[draw.card_ids[4] - 1].image}/>}
                </Link>
              </div>
            </Col>
            <Col 
            // sm={{ size: true, offset: 1}}
            >
              <div key={draw.card_ids[5].id}>
                <Link to={`/cards/${draw.card_ids[5] - 1}`}>
                      {draw.orientations[5] === false ? 
                      <img className="flip card future" src={props.cards[draw.card_ids[5] -1].image}/>
                      : <img className="card future" src={props.cards[draw.card_ids[5] - 1].image}/>}
                </Link>
              </div>
            </Col>
            <Col 
            // sm={{ size: true, offset: 1}}
            >
              <div key={draw.card_ids[6].id}>
                <Link to={`/cards/${draw.card_ids[6] - 1}`}>
                      {draw.orientations[6] === false ? 
                      <img className="flip card" src={props.cards[draw.card_ids[6] -1].image}/>
                      : <img className="card" src={props.cards[draw.card_ids[6] - 1].image}/>}
                </Link>
              </div>
            </Col>


            </Row>
            <Row>
            <Col sm={{ size: true, offset: 4 }}>
              <div key={draw.card_ids[7].id}>
                <Link to={`/cards/${draw.card_ids[7] - 1}`}>
                      {draw.orientations[7] === false ? 
                      <img className="flip card" src={props.cards[draw.card_ids[7] -1].image}/>
                      : <img className="card" src={props.cards[draw.card_ids[7] - 1].image}/>}
                </Link>
              </div>
            </Col>
            <Col sm={{ size: true, offset: 4 }}>
              <div key={draw.card_ids[8].id}>
                <Link to={`/cards/${draw.card_ids[8] - 1}`}>
                      {draw.orientations[8] === false ? 
                      <img className="flip card" src={props.cards[draw.card_ids[8] -1].image}/>
                      : <img className="card" src={props.cards[draw.card_ids[8] - 1].image}/>}
                </Link>
              </div>
            </Col>

            </Row>
            <Col sm={{ size: true, offset: 10 }}>
              <div key={draw.card_ids[9].id}>
                <Link to={`/cards/${draw.card_ids[9] - 1}`}>
                      {draw.orientations[9] === false ? 
                      <img className="flip card" src={props.cards[draw.card_ids[9] -1].image}/>
                      : <img className="card" src={props.cards[draw.card_ids[9] - 1].image}/>}
                </Link>
              </div>
            </Col>
            <Row>

            </Row>
          
          </Container>

          : null}

          <InterpretationsContainer draw={draw} /> 
          
        </Container>
        )
    }
  }
  export default Draw



          {/* Layout: {draw ? draw.layout: null}<br></br>

          {draw && (props.cards.length > 0) ? 
          <Container>
          <Row>
            <div>{draw.card_ids.slice(0,2).map((card_id, i) => 
            // this is the key to arranging; have to do all ten, though
            <Col sm={{ size: 'auto', offset: 2 }}>
              <div key={card_id.id}> 
                <Link to={`/cards/${card_id - 1}`}>
                  {draw.orientations[i] === false ? 
                  <img className="flip card" src={props.cards[card_id -1].image}/>
                  : <img className="card" src={props.cards[card_id - 1].image}/>}
                </Link>
              </div></Col>)}
            </div>
          </Row>
          <Row>
            <div>{draw.card_ids.slice(2,6).map((card_id, i) => 
              <div key={card_id.id}> 
                <Link to={`/cards/${card_id - 1}`}>
                  {draw.orientations[i] === false ? 
                  <img className="flip card" src={props.cards[card_id -1].image}/>
                  : <img className="card" src={props.cards[card_id - 1].image}/>}
                </Link>
              </div>)}
            </div>
          </Row>
          <Row>
            <div>{draw.card_ids.slice(6,8).map((card_id, i) => 
              <div key={card_id.id}> 
                <Link to={`/cards/${card_id - 1}`}>
                  {draw.orientations[i] === false ? 
                  <img className="flip card" src={props.cards[card_id -1].image}/>
                  : <img className="card" src={props.cards[card_id - 1].image}/>}
                </Link>
              </div>)}
            </div>
          </Row>
          <Row>
            <div>{draw.card_ids.slice(8,9).map((card_id, i) => 
              <div key={card_id.id}> 
                <Link to={`/cards/${card_id - 1}`}>
                  {draw.orientations[i] === false ? 
                  <img className="flip card" src={props.cards[card_id -1].image}/>
                  : <img className="card" src={props.cards[card_id - 1].image}/>}
                </Link>
              </div>)}
            </div>
          </Row>
          </Container>
          : null}
          
          <InterpretationsContainer draw={draw} /> */}