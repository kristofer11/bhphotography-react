import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

//FIGURE OUT HOW TO LINK TO OTHER PAGES WITHOUT RELOADING USING ROUTER AND NOT HREF....

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar light sticky='top' expand='md' className='d-flex justify-content-center px-0 px-md-3 px-lg-5'>
            <NavbarBrand to='/home' className='mr-sm-5 col-2 ml-0'>
                <NavLink className='brand' to='/'>
                    <h1 className='m-0' ><em>Brittany Herzog</em></h1>
                    <h1 className='mt-0'>Photography</h1>                    
                </NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-md-auto' navbar>
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
                        <NavLink className='nav-link' to='/about'>
                            About Me
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header