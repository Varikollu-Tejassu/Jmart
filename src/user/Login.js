import React, { useState } from 'react';
import axios from "axios";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBRadio, MDBBtnGroup 
}
from 'mdb-react-ui-kit';
import {   
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import {Validation,loginvalidate} from '../Validation';

import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';

import background1 from '../images/background1.jpeg';






function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const[usertype,SetUsertype] = useState('user');
  const [firstname,setFirstname] = useState('');
  const[lastname,setLastname] = useState('');
  const[email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[confirmPassword,setConfirmPassword] = useState('');
  const navigate = useNavigate();
  

 const [errors,setErrors]=useState({});
 async function load(){
  await window.location.reload();
  
 
 
  }
  const register=(e)=>{
  setErrors(Validation(firstname,lastname,email,password,confirmPassword));

  e.preventDefault();
  
   if(errors){
    
    axios.post("http://localhost:8081/register",{
      usertype:usertype,
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password

    }).then((response)=>{
   console.log(response.data);
  //  window.localStorage.setItem('token',response.data.affectedRows);
   window.location="http://localhost:3000/Login";
   toast.success('Registered successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
   


    })
  }
}

const[lemail,setLemail] = useState();
const[lpassword,setLpassword]= useState();
const login=(e)=>{
  e.preventDefault();

  setErrors(loginvalidate(lemail,lpassword));

  if(login){
  axios.post("http://localhost:8081/login",{
          usertype:usertype,
          lemail:lemail,
          lpassword:lpassword}).then((response) => {
          console.log(response.data);
         
       
        if(usertype===("user")){
          window.localStorage.setItem('token',response.data.data[0].email);
          window.localStorage.setItem('usertype',JSON.stringify(response.data.data[0].usertype));
          window.localStorage.setItem('fname',JSON.stringify(response.data.data[0].firstname));
          window.localStorage.setItem('lname',JSON.stringify(response.data.data[0].lastname));
       

         
        }
        else{
          window.localStorage.setItem('token',JSON.stringify(response.data.data[0].email));
          window.localStorage.setItem('faname',JSON.stringify(response.data.data[0].firstname));
          window.localStorage.setItem('laname',JSON.stringify(response.data.data[0].lastname));
        }
        
        if(response.data.message && usertype==="user"){
           navigate('/');
          
           load();
           
            toast.success('Login success', {
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
   
         if(response.data.message && usertype==="Admin"){
          navigate('/admin');
          toast.success('Login success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         }
         
          
            });           
};
} 


  return (
< >

<div style={{paddingTop:"20px",backgroundImage:`url(${background1})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50"  >

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between' style={{marginTop:"20px"}}>
        <MDBTabsItem >
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}  style={{fontSize:"15px",fontWeight:"bold"}} > 
           Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} style={{fontSize:"15px",fontWeight:"bold"}}>
          Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

        <MDBContainer className='fluid my-1' style={{marginBottom:"300px"}}>
      <MDBCard >

        <MDBRow className='g-0align-items-center' >

          {/* <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-9 rounded-tr-lg-2' fluid />
          </MDBCol> */}

          <MDBCol md='12'>

            <MDBCardBody className='p-2 shadow-5 text-center' style={{backgroundColor:"whitesmoke"}}>
            <h2 className="fw-bold mt-1 " >Sign in now</h2><br/><br/>
            <MDBBtnGroup style={{marginTop:"-40px",backgroundColor:"whitesmoke",width:"20px",marginLeft:"-120px"}} >
      <MDBRadio btn btnColor='success' id='btn-radio' name='options' wrapperTag='span' label='User' value="User" onChange={(e)=>SetUsertype(e.target.value)}style={{marginLeft:"50px"}} required defaultChecked />
      <MDBRadio
        btn
        btnColor='success'
        id='btn-radio2'
        name='options'
        wrapperClass='mx-2'
        wrapperTag='span'
        label='Admin'
        value="Admin" onChange={(e)=>SetUsertype(e.target.value)}
        required
      />
    
    </MDBBtnGroup><br/><br/>
              <form >
            
              <MDBInput wrapperClass='mb-3' label='Email address' id='form1' type='email' name="lemail"  onChange={(e)=>setLemail(e.target.value)} required/>
              {errors.lemail && <p style={{color: "red"}} >{errors.lemail}</p>}
              <MDBInput wrapperClass='mb-3' label='Password' id='form2' type='password' name="lpassword"  onChange={(e)=>setLpassword(e.target.value)} required/>
              {errors.lpassword && <p style={{color: "red"}} >{errors.lpassword}</p>}
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100"  onClick={login}>Sign in</MDBBtn>
             
              </form>
              <div className="text-center">

          <p>or sign in with:</p>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>


            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
    </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
        <MDBContainer fluid className='my-1' >

<MDBRow className='g-0 align-items-center'>
  <MDBCol col='6'>

    <MDBCard className='my-1 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
      <MDBCardBody className='p-3 shadow-5 text-center'>

        <h2 className="fw-bold mt-2 ">Sign up now</h2><br/>
        <MDBBtnGroup style={{backgroundColor:"whitesmoke",width:"20px",marginLeft:"-120px"}}>
<MDBRadio btn btnColor='success' id='btn-radio3' name='option' wrapperTag='span' label='User' value="User" onChange={(e)=>SetUsertype(e.target.value)} defaultChecked />
<MDBRadio
  btn
  btnColor='success'
  id='btn-radio4'
  name='option'
  wrapperClass='mx-2'
  wrapperTag='span'
  label='Admin'
  value="Admin" onChange={(e)=>SetUsertype(e.target.value)}
/>

</MDBBtnGroup><br/><br/>



        <MDBInput wrapperClass='mb-4' label='First name' id='form3' name='firstname' onChange={(e)=>setFirstname(e.target.value)}  type='text' />
        {errors.firstname && <p style={{color: "red"}} >{errors.firstname}</p>}
        <MDBInput wrapperClass='mb-4' label='Last name'  id='form4' type='text' name="lastname"  onChange={(e)=>setLastname(e.target.value)}/>
        {errors.lastname && <p style={{color: "red"}} >{errors.lastname}</p>}
        <MDBInput wrapperClass='mb-4' label='Email' id='form5'name="email" onChange={(e)=>setEmail(e.target.value)} type='email'/>
        {errors.email && <p style={{color: "red"}} >{errors.email}</p>}
        <MDBInput wrapperClass='mb-4' label='Password' id='form6' name="password"  onChange={(e)=>setPassword(e.target.value)} type='password'/>
        {errors.password && <p style={{color: "red"}} >{errors.password}</p>}
        <MDBInput wrapperClass='mb-4' label='confirmPassword' id='form7' type='password'   onChange={(e)=>setConfirmPassword(e.target.value)}/>
        {errors.confirmPassword && <p style={{color: "red"}} >{errors.confirmPassword}</p>}

        {/* <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div> */}

        <MDBBtn className='w-100 mb-4' size='md' onClick={register} >sign up</MDBBtn>
     

        <div className="text-center">

          <p>or sign up with:</p>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>

      </MDBCardBody>
    </MDBCard>
  </MDBCol>


</MDBRow>

</MDBContainer>
      </MDBTabsPane>
    </MDBTabsContent>
    </MDBContainer>

   

</div>

</>
  );
}

export default Login;
