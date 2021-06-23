import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default function NavBar(){

return (<>
<Navbar dark expand="md">
<Nav className="mr-auto" navbar>
            <NavItem>
  <NavLink href="/draws">Readings</NavLink>
  </NavItem>
  <NavItem>
  <NavLink href="/draws/new">New Draw</NavLink>
  </NavItem>
  <NavItem>
  <NavLink href="/cards">Random Card</NavLink>
  </NavItem>
  <NavItem>
  <NavLink href="/majorarcana">Major Arcana</NavLink>
  </NavItem>
  <NavItem>
  <NavLink href="/minorarcana">Minor Arcana</NavLink>
  </NavItem>
  </Nav>
  {/* <Link to="/draws" className="NavLink">Readings</Link>
  <Link to="/draws/new" className="NavLink">New Draw</Link>
  <Link to="/cards" className="NavLink">Random Card</Link>
  <Link to="/majorarcana" className="NavLink">MajorArcana</Link>
  <Link to="/minorarcana" className="NavLink">MinorArcana</Link> */}
</Navbar>
</>)
}