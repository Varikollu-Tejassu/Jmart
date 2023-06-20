import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Profile = () => {

  let id=0;
  const [myorders,setMyorders]=useState([]);
  useEffect(()=>{
    const getmyOrdersData = async ()=>{
     const email = "varikollu2004@gmail.com"
       await axios.get(`http://localhost:8081/myorders/${email}`,
      

       
      ).then((response) => {
        
        console.log(response.data); 
        //  return response.json();   
      setMyorders(response.data)
    });
  }
    
    getmyOrdersData();
  
  },[])
  return (
    <div className="container" style={{paddingTop:"130px"}}>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile Information</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="fullName" value={JSON.parse(window.localStorage.getItem('fname'))} />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" value={JSON.parse(window.localStorage.getItem('lname'))} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email"  value={window.localStorage.getItem('token')}/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{paddingLeft:"300px"}}>Order History</h5>
              {myorders.length === 0 && 
     <h1>No orders</h1>}
   

              <table className="table">
              {myorders.length>0 && 
                  <tr>
                    <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}}>Order ID</th>
                    <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}}>Date</th>
                    <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}}>Products</th>
                    <th  style={{border:"1px solid black",fontSize:"20px",backgroundColor:"#009B4D",color:"white",fontWeight:"bolder",textAlign:"center"}}>Total</th>
                  </tr>
              }
               { myorders.map((res)=>
               
                  <tr key={res.id}>
                    <td style={{fontSize:"18px",border:"1px solid black"}}>{id+=1}</td>
                    <td style={{fontSize:"18px",border:"1px solid black"}}>{res.date}</td>
                    <td style={{fontSize:"18px",border:"1px solid black"}}>{res.productlist}</td>
                    <td style={{fontSize:"18px",border:"1px solid black"}}>{res.ordertotal}</td>
                  </tr>            
                
)}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
