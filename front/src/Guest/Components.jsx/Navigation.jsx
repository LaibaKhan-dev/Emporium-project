import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { GlobalContext } from '../../usercontext/context';
import CartCanvas from '../../User/Components/CartCanvas'


export default function Navigation() {
  const { state, dispatch } = useContext(GlobalContext)
  const logOutUser = () => {
    console.log("Logout clicked");
    dispatch({
      type: "USER_LOGOUT"
    });
  };

  return (
    <>

      <Navbar bg="dark" expand="lg" variant="dark" data-aos="from-top">
        <Container>
          <Link className='nav-link text-white' to="/" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Emporium</Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Link to="/" className='text-decoration-none my-2 mx-3' style={{ color: "white" }}>Home</Link>
              <Link to="/login" className='text-decoration-none my-2 mx-3' style={{ color: "white" }}>Login</Link>
              {/* <span bg="dark" data-bs-theme="dark" style={{ color: "white" }}>
                
                <CartCanvas />
              </span> */}
              {/* <span className='btn btn-dark' onClick={logOutUser}>LogOut</span> */}


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}