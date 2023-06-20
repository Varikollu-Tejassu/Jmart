import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

import {
    
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import cartbg from '../images/cartbg.jpeg';
import {useSelector} from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteCartItem ,increaseQty,decreaseQty,clearCart, getTotals} from "../redux/productSlide";
import banana from '../images/banana.jpg';
import { useDispatch } from 'react-redux';



function Cart(){
  
    const cartItems = useSelector(state=>
      state.cartstorage)

  console.log(cartItems);
  const dispatch=useDispatch();

  useEffect(()=>{
     dispatch(getTotals());
    
     window.localStorage.setItem('cartitems',JSON.stringify(cartItems.cartstorage.map((item)=>[item.productname,item.cartQuantity])));
     window.localStorage.setItem('ordertotal',JSON.stringify(cartItems.cartTotalAmount));
     
  },[cartItems,dispatch])
  const handledeleteitem = (product) => {
    dispatch(deleteCartItem(product)
 ) };

 const handleincrease = (product)=>{
  dispatch(increaseQty(product))
 }
 const decrease = (product)=>{
  dispatch(decreaseQty(product))
 }
function cartshipping(){
 if(cartItems.cartTotalAmount> 200){
  return 20
 }
 else{
  return 0
 }
}

const navigate = useNavigate();
const placeorder = ()=>{
  if(window.localStorage.getItem('token')){
    if(cartItems.cartTotalAmount>0){

     axios.post("http://localhost:8081/placeorder",{
      email:window.localStorage.getItem('token'),
      productlist:window.localStorage.getItem('cartitems'),
      ordertotal:JSON.parse(window.localStorage.getItem('ordertotal'))
    
    }).then((response)=>{
   console.log(response.data);
  })
  
alert("order placed successfully")
dispatch(clearCart());
navigate('/')
}else{
  alert("cart is empty please add products")
}
  }
else{
  alert("please login to order")
  navigate('/login')
}
}


  
   
    return(
        <section class="h-100 h-custom" style={{backgroundImage:`url(${cartbg})`,backgroundRepeat:'no-repeat',backgroundSize:"cover",marginTop:"-2px",paddingTop:"100px"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card">
          <div class="card-body p-4">

            <div class="row">

              <div class="col-lg-7">
                <h5 class="mb-3"><Link to="/" class="text-body"><i
                      class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link></h5>
                <hr/>

                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p class="mb-1">Shopping cart</p>
                    </div>
                    </div>
                    {cartItems.cartstorage.length === 0 ?<h6 class="text-body">No Items in your cart please continue by adding products to cart </h6>
                 :(
                      <div>
                    <p class="mb-0">You have {cartItems.cartstorage.length} items in your cart</p>
                 
            
                   {cartItems.cartstorage?.map(item=>(
                <div class="card mb-3" key={item.productname}>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={banana}
                            class="img-fluid rounded-3" alt="Shopping item" style={{width:"65px"}}/>
                        </div>
                        <div class="ms-3">
                          <h5>{item.productname}</h5>
                 
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style={{width: "100px",display:"flex",flexDirection:"row",paddingRight:"13 0px"}}>
                        <input type="button" value="-" class="button-minus border rounded-circle  icon-shape icon-sm mx-0 " data-field="quantity" style={{borderRadius:"50%" }} onClick={()=>decrease(item)}/>
                         <h5 class="fw-normal mb-0 mx-2"> {item.cartQuantity }</h5>
                          <input type="button" value="+" class="button-plus border rounded-circle icon-shape icon-sm lh-0" data-field="quantity" style={{borderRadius:"50%"}} onClick={()=>handleincrease(item)}/>
                        </div>
                        <div style={{width: "80px"}}>
                          <h5 class="mb-0 " style={{marginLeft:"-10px"}}> ₹{item.price * item.cartQuantity   }</h5>
                        </div>
                        < Button onClick={()=>handledeleteitem(item)}><i class="fas fa-trash-alt"></i></Button>
                      </div>
                    </div>
                  </div>
                </div>
               ))} 
               </div>)}
              </div>
                  
              <div class="col-lg-5">

                <div class="card  text-white rounded-3" style={{backgroundColor:"#009B4D"}}>
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <h5 class="mb-0">Card details</h5>
                      
                    </div>
                    <h6 class="small mb-2">Card type</h6>
                    <div class="btn-group" role="group" aria-label="Basic example" >
                    
                            <button type="button" class="btn btn-success"><i
                        class="fab fa-cc-mastercard fa-2x me-2"></i></button>
                            <button type="button" class="btn btn-success"><i
                        class="fab fa-cc-visa fa-2x me-2"></i></button>
                            <button type="button" class="btn btn-success"><i
                        class="fab fa-cc-amex fa-2x me-2"></i></button>
                            <button type="button" class="btn btn-success"><i 
                            class="fab fa-cc-paypal fa-2x"></i>
                            </button>
                          </div>

                    
                    
                    <br/>
                    <br/>

                    <form >
                      <div  className="form-outline  form-white" style={{color:"white"}}>
                     
                           <MDBInput wrapperClass='mb-3' label="Cardholder's Name" id='form1'  type='text' name="" />
                           <MDBInput wrapperClass='mb-3' label='Card Number' id='form2' type='number' name="" />
                        
                       
                      </div>

                      <div class="row mb-4">
                        <div class="col-md-6">
                          <div class="form-outline form-white">
                            
                            <MDBInput wrapperClass='mb-3' label='Expiry' id='form2' type='text' name="" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div className="form-outline  form-white">
                            
                            <MDBInput wrapperClass='mb-3' label='CVV' id='form2' type='number' name="" />
                          </div>
                        </div>
                      </div>

                    </form>

                    <hr class="my-4"/>

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2"> ₹{cartItems.cartTotalAmount}</p>
                    </div>

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Shipping</p>
                     
                      <p class="mb-2"> ₹{cartshipping()}</p>
                    </div>

                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">Total(Incl. taxes)</p>
                      <p class="mb-2"> ₹{cartItems.cartTotalAmount+cartshipping()}</p>
                    </div>

                    <button type="button" class="btn btn-info btn-block btn-lg" 
                    onClick={()=>placeorder()}
                    >
                      <div class="d-flex justify-content-between">
                        <span> ₹{cartItems.cartTotalAmount+cartshipping()}</span>
                        <span>Place Order <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
export default Cart;





