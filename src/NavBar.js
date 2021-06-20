import {Link} from 'react-router-dom'

export default function NavBar(){

return (<>
  <Link to="/draws" className="NavLink">Readings</Link>
  <Link to="/draws/new" className="NavLink">New Draw</Link>
  <Link to="/cards" className="NavLink">Random Card</Link>
  <Link to="/majorarcana" className="NavLink">MajorArcana</Link>
  <Link to="/minorarcana" className="NavLink">MinorArcana</Link>
</>)
}