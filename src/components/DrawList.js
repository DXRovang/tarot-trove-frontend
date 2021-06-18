
import React from 'react'
import {Link} from 'react-router-dom'

const DrawList = props =>{

  return(
    <div className="Field" className="list">
      <div>{props.draws.draws.map(draw => 
        <div key={draw.id}>
          <Link to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
        )}</div>
         <img className="back" src="tarotback.jpg"/>
    </div>
  )
}

export default DrawList
