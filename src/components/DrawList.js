
import React from 'react'
import {Link} from 'react-router-dom'

const DrawList = props =>{
// debugger
  return(
    <div >

      <div>{props.draws.draws ? props.draws.draws.map(draw => <div key={draw.id}>
          <Link to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>
        ) : null}</div>

         <img src="tarotback.jpg"/>
    </div>
  )
}

export default DrawList
