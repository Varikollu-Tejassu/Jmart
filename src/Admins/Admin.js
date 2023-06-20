import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,Link, Outlet } from 'react-router-dom';
 import '../App.css';
 import 'react-toastify/dist/ReactToastify.css';
 import {  toast } from 'react-toastify';


                                                                      
 

const Admin = () => {
  const navigate = useNavigate();
  function logout(){
    localStorage.clear();
    navigate('/')
    toast.success('Logout success', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const fname=JSON.parse(localStorage.getItem("faname"))
    
  return (
    <>
     
    <header style={{position:"fixed",zIndex:"1"}}>
    <Navbar bg="prima" style={{backgroundColor:"#009B4D",width:"100%"}} expand="lg">
      <Container fluid>
     
        <Navbar.Brand href="/admin"  className="navbarbrand" style={{fontWeight:"bolder",fontSize:"40px",color:"#FAF5E9",paddingRight:"-5px"}}>
       
            Admin Dashboard 
            </Navbar.Brand>
            <h3 style={{width:"400px",color:"white",fontSize:"30px",fontWeight:"bolder",position:"absolute",marginLeft:"800px",paddingTop:"10px"}}>Welcome, {fname}</h3>
            <Nav className="me-auto my-3 my-lg-0" style={{ marginLeft:"150px",fontWeight:"bolder",fontSize:"30px"}}>
           <Nav.Link onClick={logout} style={{color:"#FAF5E9",paddingLeft:"620px"}}>Logout</Nav.Link>
           </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
</Container>
</Navbar>
</header>
        
       
    <div class="container-fluid" style={{paddingTop:"80px",position:"static"}}>
    <div class="row flex-nowrap" >
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " style={{backgroundColor:"rgb(210, 210, 210)",height:"1000px"}}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-black min-vh-100 me-auto my-3 my-lg-0" style={{fontSize:"20px"}} >
       
           <Nav.Link as={Link} to="." style={{color:"black"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="Customers" style={{color:"black",marginTop:"20px"}}>Customers</Nav.Link>
            
           

        <div class="accordion accordion-flush" id="accordionFlushExample" style={{marginLeft:"-22px",zIndex:"0"}}>
  
    <h2 class="accordion-header" id="flush-headingOne" style={{textDecoration:"none",width:"100%"}} >
      <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{textDecoration:"none",backgroundColor:"rgb(210, 210, 210)",width:"100",fontSize:"18px",marginTop:"10px"}}>
      StockManage
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{backgroundColor:"rgb(210, 210, 210)"}} >
      <Nav.Link as={Link} to="stockmanagement" style={{color:"black",marginTop:"5px",fontSize:"15px"}}>Add Product</Nav.Link><hr/>
      <Nav.Link as={Link} to="manageproduct" style={{color:"black",marginTop:"5px",fontSize:"15px"}}>Manage Product</Nav.Link>
      </div>
    
  </div>

</div>

<Nav.Link as={Link} to="Orders" style={{color:"black",marginTop:"10px"}}>Orders</Nav.Link>
           
            </div>
        </div>
    </div>
</div>

 

       



 



<Outlet/>

    </>
  );
};

export default Admin;
