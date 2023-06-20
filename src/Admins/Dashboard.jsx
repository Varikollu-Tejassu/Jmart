import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    
    MDBRow,
    MDBCol,
    MDBInput,
    
    MDBFile
  }
  from 'mdb-react-ui-kit';
  import Form from 'react-bootstrap/Form';
  import { Button } from 'react-bootstrap';
  import { Link} from 'react-router-dom';
  import Nav from 'react-bootstrap/Nav';
  import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast } from 'react-toastify';

export const Customers = () => {
    const [customers,setCustomers]=useState([]);
    useEffect(()=>{
      const getCustomersData = async ()=>{
         await axios.get("http://localhost:8081/customers").then((response) => {
          
          console.log(response.data); 
          //  return response.json();   
        setCustomers(response.data)
      });
    }
      
      getCustomersData();
    
    },[])
   
    const[records,setRecords]=useState('');
    console.log(records);
    
    
  return (
  
   
    <div style={{marginLeft:"250px",marginTop:"-950px",position:"relative"}}>
     <h1  style={{marginLeft:"300px"}} >Customers</h1>
     <h6 style={{marginLeft:"12px",position:"absolute",paddingTop:"10px"}} >Number of customers: {customers.length}</h6>
     {customers.length == 0 && 
       <h1 style={{marginLeft:"290px",color:"red"}}>No customers</h1>}
        <Form className="d-flex" style={{marginTop:"10px",marginLeft:"200px"}} >
                
                <Form.Control
                  type="search"
                  placeholder={"Search for customers"}
                  className="searchinput"
                  aria-label="Search"
                  style={{width:"300px",marginLeft:"310px",backgroundColor:"white",alignContent:"left" , fontWeight:"bold"}}
                  onChange={(e)=>{setRecords(e.target.value)}}
                /> 
               
              </Form> 
      
           
        <div class="container py-2" >
     
          <table style={{width:"800px",border:"1px solid black"}} >
          {customers.length>0 && 
          <tr>
            <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >First Name</th>
            <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Last Name</th>
            <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Email</th>
         
          </tr>
       }
        
          {customers.filter((res)=>{
            return records.toLowerCase()===''?res:res.firstname.toLowerCase().includes(records) ||  records.toLowerCase()===''?res:res.lastname.toLowerCase().includes(records)
          }).map(res =>(
              
              <tr key={res.id} style={{height:"30px",overflow:"scroll"}} >
              <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}}>{res.firstname}</td>
              <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} >{res.lastname}</td>
              <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} >{res.email}</td>
           </tr>
          ))}
        </table>
     
       
        
         </div>

    
    </div>
  )
}






export const Addproduct=()=>{
    const[category,setCategory]=useState();
    const[productname,setProductname]=useState();
    const[price,setPrice]=useState();
    const[units,setUnits]=useState();
    const[file,setFile]=useState();
    const addproduct=(e)=>{
   
        e.preventDefault();
        // setErrors(Validation(firstname,lastname,email,password,confirmPassword));
        //  if(errors){
          const formData = new FormData();
          formData.append("file", file);
          axios.post("http://localhost:8081/addproduct",{
           category:category,
           productname:productname,
           price:price,
           units:units,
           file:file
      
          }).then((response)=>{
         console.log(response.data);
         
      
        //  window.localStorage.setItem('token',response.data.affectedRows);
         window.location="http://localhost:3000/admin";
         toast.success('Added Successfully ', {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
      
          })
        // }
      }
      
    return(
        <>
        <div style={{marginLeft:"50px",marginTop:"-950px",position:"relative",overflow:"hidden"}}>
        <h1 style={{marginLeft:"600px"}}>Add Product </h1>
       
    <MDBContainer fluid style={{marginLeft:"200px",marginTop:"-30px"}}>

      <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol lg='8'>

          <MDBCard className='my-5 rounded-3' style={{maxWidth: '600px'}}>
            

            <MDBCardBody className='px-5' >

              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{marginLeft:"30px"}} >ADD DETAILS OF THE PRODUCT</h3>
              <MDBInput wrapperClass='mb-4' label='category: fruits/vegetables/softdrinks/snacks' id='form1' name="category" onChange={(e)=>setCategory(e.target.value)} type='text'/>

              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass=' mb-4' label='product name' id='form2' name="productname" onChange={(e)=>setProductname(e.target.value)} type='text'/>
                </MDBCol>

                <MDBCol md='6' className='mb-1'>
                <MDBInput wrapperClass=' mb-4' label='price' id='form2' name="price" onChange={(e)=>setPrice(e.target.value)} type='text'/>
                  
                </MDBCol>

              </MDBRow>

            
        
                
                  <MDBInput wrapperClass='mb-4' label='units:dozen/kg/litre' id='form3'name="units" onChange={(e)=>setUnits(e.target.value)} type='text'/>
                
                
        
              <MDBCol md='9' className='pe-5'>
                  <MDBFile size='lg' id='customFile' name="file" onChange={(e)=>setFile(e.target.files[0])} />
                  <div className="small text-muted mt-2">Upload your product image or any other relevant file. Max file size 50 MB</div>
                </MDBCol>

                <MDBRow >
                <MDBCol md='6'>
              <MDBBtn color='success' className='mb-4' size='lg'  style={{marginLeft:"150px"}} onClick={addproduct}>ADD</MDBBtn>
              </MDBCol>
              <MDBCol md='6'>
              <MDBBtn color='success' className='mb-4' size='lg'  style={{marginLeft:"-10px"}} > <Nav.Link as={Link} to="/admin/manageproduct" >Manage</Nav.Link></MDBBtn>
            </MDBCol>
            </MDBRow>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    <ToastContainer/>
    </div>
    </>

    )
}
export const ManageProduct=()=>{
   


        const [products,setProducts]=useState([]);
    useEffect(()=>{
      const getProductsData = async ()=>{
         await axios.get("http://localhost:8081/products").then((response) => {
          
          console.log(response.data); 
          //  return response.json();   
        setProducts(response.data)
      });
    }
      
      getProductsData();
    
    },[])
   
   const deleteproduct = async res=>{
    await axios.delete(`http://localhost:8081/products/${res.productname}`).then((response)=>{
      console.log(response.data);
      console.log(res.productname)
      setProducts(products.filter(p=>p.productname!==res.productname))
    })
   }

   const[IsHover,setIsHover]=useState(false);
    const handleMouseEnter=()=>{
        setIsHover(true);
    }
    const handleMouseLeave=()=>{
        setIsHover(false);
    }
    const[records1,setRecords1]=useState("");
    // 
  return (
  <>
   
    <div style={{marginLeft:"250px",marginTop:"-950px",position:"relative"}}>
     <h1  style={{marginLeft:"300px",marginTop:"-550px"}} >Products</h1>
     <h6 style={{marginLeft:"12px",marginTop:"20px",position:"absolute"}} >Number of products: {products.length}</h6>
     {products.length === 0 && 
       <h1 style={{marginLeft:"290px",color:"red"}}>No products</h1>}
        <Form className="d-flex" style={{marginTop:"10px",marginLeft:"200px"}} >
                
                <Form.Control
                  type="search"
                  placeholder={"Search for Items...."}
                  className="searchinput"
                  aria-label="Search"
                  style={{width:"300px",marginLeft:"163px",backgroundColor:"white",alignContent:"left" , fontWeight:"bold"}}
                  onChange={(e)=>{setRecords1(e.target.value)}}
                /> 
                <Button id="searchbutton" 
            style={{color: IsHover ? "white": "#FAF5E9", 
            backgroundColor: IsHover ? "black" :"#009B4D",
            marginLeft:"5px" ,
            border:"1px solid black",
            fontWeight:"bold"
            }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <Nav.Link as={Link} to="/admin/stockmanagement" >Add Product</Nav.Link></Button>
                
              </Form> 
      
           
        <div class="container py-2" >
   
          <table style={{width:"800px",border:"1px solid black"}} >
          {products.length>0 && 
          <tr>
            <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >category</th>
            <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Product Name</th>
            <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Price</th>
            <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >units</th>
            <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Manage</th>
         
          </tr>
       }
        
          {products.filter((res)=>{
            return records1.toLowerCase()===''?res:res.productname.toLowerCase().includes(records1)}).map(res =>(
              
              <tr key={res.id} style={{height:"30px"}}>
              <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}}>{res.category}</td>
              <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} >{res.productname}</td>
              <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} >{res.price}</td>
              <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} >{res.units}</td>
              <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} ><button onClick={()=>deleteproduct(res)}>Delete</button></td>
           
           </tr>
          ))}
        </table>
       
        
         </div>
         </div>
         

</>
    )
}

 export const Orders=()=>{
  const [orders,setOrders]=useState([]);
  useEffect(()=>{
    const getOrdersData = async ()=>{
       await axios.get("http://localhost:8081/orders").then((response) => {
        
        console.log(response.data); 
        //  return response.json();   
      setOrders(response.data)
    });
  }
    
    getOrdersData();
  
  },[])
  const[IsHover,setIsHover]=useState(false);
  const handleMouseEnter=()=>{
      setIsHover(true);
  }
  const handleMouseLeave=()=>{
      setIsHover(false);
  }
  const[records,setRecords]=useState('');
  console.log(records);
  
  
return (

 
  <div style={{marginLeft:"250px",marginTop:"-950px",position:"relative"}}>
   <h1  style={{marginLeft:"300px"}} >Orders</h1>
   <h6 style={{marginLeft:"12px",position:"absolute",paddingTop:"10px"}} >Number of orders: {orders.length}</h6>
   {orders.length == 0 && 
     <h1 style={{marginLeft:"290px",color:"red"}}>No orders</h1>}
      <Form className="d-flex" style={{marginTop:"10px",marginLeft:"200px"}} >
              
              <Form.Control
                type="search"
                placeholder={"Search for customer orders"}
                className="searchinput"
                aria-label="Search"
                style={{width:"300px",marginLeft:"310px",backgroundColor:"white",alignContent:"left" , fontWeight:"bold"}}
                onChange={(e)=>{setRecords(e.target.value)}}
              /> 
             
            </Form> 
    
         
      <div class="container py-2" >
   
        <table style={{width:"800px",border:"1px solid black"}} >
        {orders.length>0 && 
        <tr>
          <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Date</th>
          <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Email</th>
          <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Product List</th>
          <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}} >Order Total</th>
        </tr>
     }
      
        {orders.filter((res)=>{
          return records.toLowerCase()===''?res:res.email.toLowerCase().includes(records) 
        }).map(res =>(
            
            <tr key={res.id} style={{height:"30px",overflow:"scroll"}} >
            <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}}>{res.date}</td>
            <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} >{res.email}</td>
            <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} >{res.productlist}</td>
            <td style={{fontSize:"18px",borderRight:"1px solid black",textAlign:"center"}} >{res.ordertotal}</td>
         </tr>
        ))}
      </table>
   
     
      
       </div>

  
  </div>
)
        }