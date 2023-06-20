import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const productSlice = createSlice({
  name: "cartstorage",
  initialState:{
    cartstorage:[],
    cartTotalAmount:0,

  },
  reducers: {
    
    addCartItem: (state, action) => {

   
      const itemIndex = state.cartstorage.find(item=>item.productname === action.payload.productname)
      if (itemIndex) {
        toast.info('Item Already in cart ', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          state.cartstorage= state.cartstorage.map(item=>(item.productname===action.payload.productname ? {...item,cartQuantity:item.cartQuantity+1}:item))
     
      } else {
        toast.success('Item added to cart ', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        const tempproduct={...action.payload, cartQuantity:1};
        state.cartstorage.push(tempproduct);

         } 
 
    },
    deleteCartItem: (state, action) => {
      toast.success('Item deleted ', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      state.cartstorage = state.cartstorage.filter((item) => item.productname !== action.payload.productname);
    },
    increaseQty: (state, action) => {
      state.cartstorage = state.cartstorage.map(item=>(item.productname === action.payload.productname ? {...item,cartQuantity:item.cartQuantity+1}:item))
         
  
    },
    decreaseQty: (state, action) => {
      const index = state.cartstorage.findIndex((el) => el.productname === action.payload.productname);
      if (index !== -1 && state.cartstorage[index].cartQuantity > 1) {
        state.cartstorage[index].cartQuantity -= 1;
      
      }

      //  state.cartstorage = state.cartstorage.map(item=>(item.productname === action.payload.productname ? {...item,cartQuantity:item.cartQuantity-1}:item))
      

  },
  clearCart:(state,action) =>{
    state.cartstorage=[]
  },
  getTotals:(state,action)=>{
    let{total} = state.cartstorage.reduce((cartTotal,item)=>{
      
       let subtotal = parseInt(item.price* item.cartQuantity)

       cartTotal.total+=subtotal

      return cartTotal;
    },{
      total:0
    }
    );
    state.cartTotalAmount = total
  },
  









  
  }
});


export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
  clearCart,
  getTotals,
} = productSlice.actions;

export default productSlice.reducer;






 