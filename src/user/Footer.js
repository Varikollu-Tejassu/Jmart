import React from 'react';
import logo from'../images/logo.png';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';


export default function Footer() {
  
  return (
    <MDBFooter bgColor='green' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{fontSize:"25px", fontWeight:"bolder"}}>Get connected with us on social networks:</span>
        </div>

        <div>
        <MDBBtn className='m-1'  style={{ backgroundColor: '#3b5998' }} href="">
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>
      
     
      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontSize:"30px"}} >
              <img
              src={logo}
              width="50"
              height="50"
              
              className="d-inline-block mb-1"
              alt="React Bootstrap logo"
            />
                
                JMART
              </h6>
              <p style={{fontSize:"15px"}}>
            
           JMART allow finding a needed product online with no need to attend several stores, wonder in their halls to find a needed product and wait in the long billing line. 
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Categories</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Fruits
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vegetables
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Soft drinks
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Snacks
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Chennai , Tamil Nadu , India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 93476xxxxx
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 91 709500xxxxx
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="mb-4">

    <h2 className="h1-responsive font-weight-bold text-center my-4" style={{fontSize:"30px", textDecoration:"underline"}}>Get in touch with us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5" style={{fontSize:"25px"}}>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row" style={{fontSize:"20px",fontWeight:"bold",paddingLeft:"10px",width:"80%"}}>

    
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                       

                          &nbsp;  <label for="name" class="">Your name:</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder='Enter your name' required/>
                        </div>
                    </div>
               
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            
                        &nbsp; <label for="email" class="">Your email:</label>
                            <input type="text" id="email" name="email" class="form-control" placeholder='Enter your Mail' required/>
                        </div>
                    </div>
               

                </div>
        
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                           
                        &nbsp; <label for="subject" class="">Subject:</label>
                            <input type="text" id="subject" name="subject" class="form-control" placeholder='Subject' required/>
                        </div>
                    </div>
                </div>
             
                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                           
                        &nbsp;<label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>

            </form>
            <br/>
        

            <div class="text-center text-md-left">
                <a class="btn btn-primary" h>Send</a><br/>
            </div>
            <div class="status"></div>
        </div>
    </div>
    <br/>

</section>
{/* <section class="mb-4" >

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.929582597324!2d80.23084275541993!3d12.972977699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dd64c3372a7%3A0x73cdba509a0fd6f3!2sJMAN%20Group%20-%20Digital%20Services!5e0!3m2!1sen!2sin!4v1685190318546!5m2!1sen!2sin" style={{width:"400px", height:"300px" ,border:"0", allowFullScreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

    </section> */}
<section style={{marginLeft:"65%",marginTop:"-330px"}}>
    
<iframe md='3' lg='2' xl='2' title="map" className='mx-auto mb-4 w-responsive' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.929582597324!2d80.23084275541993!3d12.972977699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dd64c3372a7%3A0x73cdba509a0fd6f3!2sJMAN%20Group%20-%20Digital%20Services!5e0!3m2!1sen!2sin!4v1685190318546!5m2!1sen!2sin" style={{width:"400px", height:"300px" ,border:"0", allowFullScreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
</section>
      <div className='text-center p-4' style={{ backgroundColor: "#009B4D",color:"white"}}>
        © 2023 Copyright@
        <a className='text-reset fw-bold' href='https://jmart.com/'>
          Jmart.com
        </a>
      </div>
      
    </MDBFooter>
  );
}