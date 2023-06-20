import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import apples from '../images/banana.jpg';
import banner from '../images/banner.jpg';
import productbg2 from'../images/productbg2.jpg';
import productbg3 from'../images/productbg3.jpeg';
import softdrinks1 from'../images/softdrinks.jpeg';
import { addCartItem } from '../redux/productSlide';
import { useDispatch } from 'react-redux';

const ProductList = () => {
    const [fruits,setFruits]=useState([]);
    useEffect(()=>{
      const getFruitsData = async ()=>{
         await axios.get("http://localhost:8081/fruits").then((response) => {
            
        setFruits(response.data)
      });
    }
      
      getFruitsData();
    
    },[])


    const [vegetables,setVegetables]=useState([]);
    useEffect(()=>{
      const getVegetablesData = async ()=>{
         await axios.get("http://localhost:8081/vegetables").then((response) => {
          
      
        setVegetables(response.data)
      });
    }
      
      getVegetablesData();
    
    },[])


    const [softdrinks,setSoftdrinks]=useState([]);
    useEffect(()=>{
      const getSoftdrinksData = async ()=>{
         await axios.get("http://localhost:8081/softdrinks").then((response) => {
          
    
        setSoftdrinks(response.data)
      });
    }
      
      getSoftdrinksData();
    
    },[])

    const [snacks,setSnacks]=useState([]);
    useEffect(()=>{
      const getSnacksData = async ()=>{
         await axios.get("http://localhost:8081/snacks").then((response) => {
          
      
          //  return response.json();   
        setSnacks(response.data)
      });
    }
      
      getSnacksData();
    
    },[])

  const dispatch=useDispatch();
  const handleaddtocart = (product) => {
    dispatch(addCartItem(product)
 ) };

 //Function to convert blob/buffer to image(base-64)
 const renderImages = (file) => {
  if (!file) {
    return null;
  }

  if (typeof file === "string" && file.startsWith("data:image")) {
    return file;
  }

  if (typeof file === "string" && file.startsWith("http")) {
    return file;
  }

  const base64String = btoa(String.fromCharCode(...new Uint8Array(file)));
  const imageUrl = `data:image/jpg;base64,${base64String}`;
  return imageUrl;
};




  
   
  return (
    <>
    <div >
    <br/>
     <img src={banner} alt='' style={{width:"100%",height:"400px",paddingTop:"60px"}}/>
     <hr/>
     {fruits.length > 0 && 
       <h1 style={{marginLeft:"480px",backgroundColor:"#009B4D",color:"white",position:"absolute",marginTop:"10px",border:"1px solid white",borderRadius:"10px",width:"300px",paddingLeft:"100px"}}>Fruits</h1>}
      
        <section style={{backgroundColor: "white",paddingTop:"30px",backgroundImage:`url(${productbg2})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
           
        <div class="container py-5" >
        <div class="row">
        {
          fruits.map((res)=>
           <div class="col-md-12 col-lg-4 mb-1 mb-lg-3"   >
            <div class="card" key={res.id}>
 
           
              <img src={apples} alt='' style={{height:"250px"}}/>
                {/* const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer))); */}
               
             
              <div class="card-body">
                <div class="d-flex justify-content-between">
                <h5 class="ms-0" style={{paddingLeft:"120px"}}>{res.productname}</h5>
             
                 
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                <h5 class="text-dark mb-0" style={{paddingLeft:"100px"}}> ₹{res.price} per {res.units}</h5>
                  
                </div>
                <MDBBtn style={{marginLeft:"100px",backgroundColor:"#009B4D"}} onClick={()=>handleaddtocart(res)} >Add to cart</MDBBtn>
              </div>
            </div>
          </div>
          )

        }
         </div>
  
     </div>
     <hr/>
      
 </section>
 <br/>
    
    
     
      {vegetables.length > 0 && <hr/> &&
       <h1  style={{marginLeft:"480px",backgroundColor:"#009B4D",color:"white",position:"absolute",marginTop:"10px",border:"1px solid white",borderRadius:"10px",width:"300px",paddingLeft:"50px"}}>Vegetables</h1>}
        <section style={{backgroundColor: "white",paddingTop:"30px",backgroundImage:`url(${productbg3})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
           
        <div class="container py-5" >
        <div class="row" style={{display:"flex",flexDirection:"row"}}>
        
        {
          vegetables.map((res)=>
          <div class="col-md-12 col-lg-4 mb-1 mb-lg-3" >
            <div class="card" >
         
              <img alt='' src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"/>
               {/* const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
               <img src={`data:image/png;base64,${base64String}`} alt=""/> */}
             
              <div class="card-body">
                <div class="d-flex justify-content-between">
             
                <h5 class="ms-0" style={{paddingLeft:"120px"}}>{res.productname}</h5>
                </div>
                <div class="d-flex justify-content-between mb-3">
                <h5 class="text-dark mb-0" style={{paddingLeft:"110px"}}> ₹{res.price} Per {res.units}</h5>
                  
                </div>
                <MDBBtn style={{marginLeft:"100px",backgroundColor:"#009B4D"}} onClick={()=>handleaddtocart(res)} >Add to cart</MDBBtn>
              </div>
            </div>
          </div>
          )

        }
         </div>
  
     </div>
      
 </section>
 {softdrinks.length > 0 && <hr/> &&
       <h1  style={{marginLeft:"430px",backgroundColor:"#009B4D",color:"white",position:"absolute",marginTop:"10px",border:"1px solid white",borderRadius:"10px",width:"400px",paddingLeft:"100px"}}>Soft Drinks</h1>}
      
        <section style={{backgroundColor: "white",paddingTop:"30px",backgroundImage:`url(${softdrinks1})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
           
        <div class="container py-5" >
        <div class="row" >
        {
          softdrinks.map((res)=>
          <div class="col-md-12 col-lg-4 mb-1 mb-lg-3" >
            <div class="card" >
          
              <img alt=" " src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"/>
                {/* const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer))); */}
               
             
              <div class="card-body">
                <div class="d-flex justify-content-between">
                <h5 class="ms-0" style={{paddingLeft:"120px"}}>{res.productname}</h5>
                  
                 
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                <h5 class="text-dark mb-0" style={{paddingLeft:"110px"}}> ₹{res.price} {res.units ? <span>per {res.units}</span>:null}</h5>
                  
                </div>
                <MDBBtn style={{marginLeft:"100px",backgroundColor:"#009B4D"}} onClick={()=>handleaddtocart(res)} >Add to cart</MDBBtn>
              </div>
            </div>
          </div>
          )

        }
         </div>
  
     </div>
      
 </section>
 <br/>
    
    
     
      {snacks.length > 0 && <hr/> && 
       <h1 style={{marginLeft:"480px",backgroundColor:"#009B4D",color:"white",position:"absolute",marginTop:"10px",border:"1px solid white",borderRadius:"10px",width:"300px",paddingLeft:"90px"}}>Snacks</h1>}
        <section style={{backgroundColor: "white",paddingTop:"30px",backgroundImage:`url(${softdrinks1})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}} >
           
        <div class="container py-5" >
        <div class="row" style={{display:"flex",flexDirection:"row"}}>
        
        {
          snacks.map((res)=>
          <div class="col-md-12 col-lg-4 mb-1 mb-lg-3" >
            <div class="card" >

              <img alt='' src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"/>
               {/* const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
               <img src={`data:image/png;base64,${base64String}`} alt=""/> */}
             
              <div class="card-body">
                <div class="d-flex justify-content-between">
                <h5 class="ms-0" style={{paddingLeft:"120px"}}>{res.productname}</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                <h5 class="text-dark mb-0" style={{paddingLeft:"130px"}}> ₹{res.price}
                 {/* Per {res.units} */}
                 </h5>
                  
                </div>
                <MDBBtn style={{marginLeft:"100px",backgroundColor:"#009B4D"}} onClick={()=>handleaddtocart(res)}  >Add to cart</MDBBtn>
              </div>
            </div>
          </div>
          )

        }
        <hr/>
         </div>
  
     </div>
      
 </section>
 
    
    
</div>
   
</>
  )
}


export default ProductList;


