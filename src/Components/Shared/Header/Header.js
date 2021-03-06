import React from 'react';
import './Header.css';
import logo from '../../../images/logo-default-286x60.png';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <Navbar className="px-md-5" bg="light" variant="light" expand="lg">
            <Navbar.Brand as={Link} to="/home"> <img src={logo} alt="" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className="text-orange" as={Link} to="/home">Home</Nav.Link>
                <Nav.Link className="text-orange" as={Link} to="/productsPage">Products</Nav.Link>
                {/* <Nav.Link className="text-orange" as={Link} to="/about">About</Nav.Link>
                <Nav.Link className="text-orange" as={Link} to="/contact">Contact</Nav.Link> */}

                {
                    user.email ? (
                        <>
                            <button className="btn btn-light">Hi {user.displayName}</button>
                            <Nav.Link as={Link}  className="btn btn-warning me-md-2 text-white fw-bold" to="/dashboard">Dashboard</Nav.Link>
                            <button className="btn btn-danger" onClick={logOut}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link}  className="btn btn-danger text-white fw-bold" to="/login">Login</Nav.Link>
                            <Nav.Link as={Link}  className="btn btn-primary text-white fw-bold ms-md-2" to="/register">Register</Nav.Link>
                        </>
                    )
                }
                

            
                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;