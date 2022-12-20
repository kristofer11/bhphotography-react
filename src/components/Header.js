import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

//FIGURE OUT HOW TO LINK TO OTHER PAGES WITHOUT RELOADING USING ROUTER AND NOT HREF....

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar light sticky='top' expand='md'>
            <NavbarBrand href='/' className='ms-5'>
                <h1>Brittany Herzog</h1>
                <h1>Photography</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/landscape'>
                            Landscape
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/drone'>
                            Drone
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='about'>
                            About Me
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header