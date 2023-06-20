// Colors used: Green (#009B4D), tangerine yellow (#FFCC00), ivory (#FAF5E9
import '../App.css';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import logo from "../images/logo.png";
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link,  useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';


function Header() {
  
    const[IsHover,setIsHover]=useState(false);
    const handleMouseEnter=()=>{
        setIsHover(true);
    }
    const handleMouseLeave=()=>{
        setIsHover(false);
    }
    const [show,setShow]=useState(false)
    const showDropdown = (e)=>{
      setShow(!show);
    }
    const hideDropdown = (e) =>{
      setShow(false);
    }

    const [showcat,setShowcat]=useState(false)
    const showDropcat = (e)=>{
      setShowcat(!showcat);
    }
    const hidecat = (e) =>{
      setShowcat(false);
    }
   
  const [authenticated, setAuthenticated] = useState();
  useEffect(()=>{
     let user = localStorage.getItem('token');
   
     let type= JSON.parse(localStorage.getItem('usertype'));
     if(user && type==="user"){
      setAuthenticated(user);
     }
       
       
  },[setAuthenticated]);

  

  const navigate=useNavigate();
  function logout(){
    localStorage.clear();
  
     navigate('/')
    toast.success('logout success', {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const firstname=JSON.parse(window.localStorage.getItem("fname"));
    
  return (
    <>
   <div style={{width:"100%"}}>
    <Navbar bg="prima" style={{backgroundColor:"#009B4D",width:"100%",position:"fixed",zIndex:'1'}} expand="lg">
      <Container fluid    >
     
        <Navbar.Brand href="/"  className="navbarbrand" style={{fontWeight:"bolder",fontSize:"40px",color:"#FAF5E9",paddingRight:"-5px"}}>
           <img
              src={logo}
              width="30"
              height="30"
              
              className="d-inline-block pt-1"
              alt="React Bootstrap logo"
            />
            JMART
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex">
                
            <Form.Control
              type="search"
              placeholder={"Search for Items...."}
              className="searchinput"
              aria-label="Search"
              style={{width:"300px",marginLeft:"100px",backgroundColor:"white",alignContent:"left" , fontWeight:"bold"}}
              
            /> 
            <Button id="searchbutton" 
            style={{color: IsHover ? "white": "#FAF5E9", 
            backgroundColor: IsHover ? "black" :"#009B4D",
            marginLeft:"5px" ,
            border:"1px solid black",
            fontWeight:"bold"
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Search &nbsp;<MDBIcon fas icon="search" /></Button>
           
          </Form> 
          <Nav className="me-auto my-2 my-lg-0" style={{ marginLeft:"100px",fontWeight:"bolder",fontSize:"20px"}}>
           <Nav.Link as={Link} to="/" style={{color:"#FAF5E9",paddingLeft:"10px"}}>Home</Nav.Link>
           {/* <Nav.Link as={Link} path='/'relative='path' end style={({isActive})=>isActive?currentPage:null} >Home</Nav.Link> */}
           <NavDropdown title={"Categories"} id="basic-nav-dropdown" show={showcat} onMouseEnter={showDropcat} onMouseLeave={hidecat} align={{ lg: 'start'}} style={{marginLeft:"5px"}}>
              <NavDropdown.Item as={Link} to="/">Fruits</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/" >Vegetables</NavDropdown.Item>
              <NavDropdown.Item as={Link}  to="/">Soft drinks</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Snacks</NavDropdown.Item>
            </NavDropdown>
       
           
            <Nav.Link as={Link} to="/Cart"  style={{color:"#FAF5E9",marginLeft:"10px"}}>Cart</Nav.Link>
        
          
            { authenticated  ?  
            
                  
              <NavDropdown title={firstname} id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} align={{ lg: 'start' }} style={{marginLeft:"15px"}}>
              <NavDropdown.Item as={Link} to="/Profile"  className="dropdownitem">Profile</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to={"myorders"}  className="dropdownitem">My orders</NavDropdown.Item> */}
              {/* <NavDropdown.Item as={Link} to={"/Admin"}  className="dropdownitem">Notifications</NavDropdown.Item> */}
              <NavDropdown.Item onClick={logout}  className="dropdownitem">Logout</NavDropdown.Item>
            </NavDropdown> :
            <Nav.Link as={Link} to="/Login"  style={{color:"#FAF5E9"}}>Login</Nav.Link>
}
          </Nav>

            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* {IsShown && <Footer/>} */}

</div>
   </>
  );
}

export default Header;
