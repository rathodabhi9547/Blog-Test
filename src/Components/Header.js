import React from "react";
import "../Styless/Header.css";
import { Container, Nav,Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from '../Imgs/Banjara Logo.png'
import { useSelector } from "react-redux";
import { clearLoginStatus } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {

		//get state from store
		let {userObj, isSuccess} = useSelector(
		  (state) => state.user
		);
		//get dispathc function
		let dispath = useDispatch();
	  
		//get navigate function
		let navigate = useNavigate();
	  
		//logout user
		const userLogout = () => {
		  localStorage.clear();
		  dispath(clearLoginStatus());
		  navigate('/login');
		};
	  
		return (
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
			  <Container>
				<Navbar.Brand href="#home">
					<img src={Logo} alt="" className=" Image0 "/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				  <Nav className="Navbar1 ms-auto">
					{isSuccess !== true ? (
					  <>
						{/* These links can be visible when no user logged in */}
						<Nav.Item>
						  <Nav.Link eventKey="1" as={NavLink} to="/">
							Home
						  </Nav.Link>
						</Nav.Item>

						<Nav.Item>
						  <Nav.Link eventKey="2" as={NavLink} to="/Blogging">
							Blogging
						  </Nav.Link>
						</Nav.Item>

						
	  
			
					  </>
					) : (
					  <>
						{/* This dropdown is visible only when a user is logged in */}
						<Nav.Item>
						  <Nav.Link eventKey="1" as={NavLink} to="/">
							Home
						  </Nav.Link>
						</Nav.Item>

						<Nav.Item>
						  <Nav.Link eventKey="1" as={NavLink} to="/Blogging">
							Blogging
						  </Nav.Link>
						</Nav.Item>

						<NavDropdown 
						  title={userObj.username} id="collasible-nav-dropdown" ID="drop-down">
						  <NavDropdown.Item onClick={userLogout} >
							Logout
						  </NavDropdown.Item>
						</NavDropdown>
						
					  </>
					)}
				  </Nav>
				</Navbar.Collapse>
			  </Container>
			</Navbar>
		);
}
export default Header;