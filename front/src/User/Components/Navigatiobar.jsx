import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { GlobalContext } from '../../main';
import CartCanvas from './CartCanvas';
import { GlobalContext } from '../../usercontext/context';
// import { BiSolidContact } from 'react-icons/Bi'

function NavigatioBar() {
  const {contextData} = useContext(GlobalContext)
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
       
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/Products">Products</Link>
              <Link className='nav-link' to="/Categories">Categories</Link>
              {/* < Link className='nav-link text-white' to='UserProfile'>UserProfile</Link>
              <BiSolidContact size={30} color='white'/> */}
           <span  bg="dark" data-bs-theme="dark" style={{color: "white"}}>
            <CartCanvas/>
           </span>
           <span className='btn btn-dark' onClick={logOutUser}>LogOut</span>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigatioBar;
