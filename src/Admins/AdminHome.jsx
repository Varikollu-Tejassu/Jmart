import React from 'react'
import adminbg from '../images/adminbg.jpeg';
import adminimage from '../images/adminimage.png';

const AdminHome = () => {
  return (
    <div style={{width:'83%',marginLeft:'auto',position:"relative",marginTop:"-1100px",overflow:"hidden"}}                                        >
        <div style={{backgroundImage:`url(${adminbg})`,height:"600px"}}> 
        <div className="container" style={{marginLeft:"60px",paddingTop:"130px"}}>
            <img alt='
            ' src={adminimage}  style={{marginLeft:"350px",height:"320px",width:"600px",position:"absolute"}}/>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile Information</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="fullName" value={JSON.parse(window.localStorage.getItem('faname'))} />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" value={JSON.parse(window.localStorage.getItem('laname'))} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email"  value={JSON.parse(window.localStorage.getItem('token'))}/>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default AdminHome