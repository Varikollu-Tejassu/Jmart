
const Validation = (firstname,lastname,email,password,confirmPassword) => {
    let errors = {};
    if(!firstname){
        errors.firstname="First Name is Required";
    }
    if(!lastname){
        errors.lastname="Last Name is Required";
    }
    if(!email){
        errors.email = 'Email is Required.'
    } else if(!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Invalid Email Address.'
    }
    if(!password){
        errors.password = 'Password is Required.'
    } else if(password.length < 6) {
        errors.password = 'Password must be greater than 6 characters.'
    }
    if(password!==confirmPassword){
        errors.confirmPassword="passwords not matched";
    }
    
    

  return errors;
}






const loginvalidate =(lemail,lpassword)=>{
    let errors={};
    if(!lemail){
        errors.lemail = 'login Email is Required.'
    } else if(!/\S+@\S+\.\S+/.test(lemail)) {
        errors.lemail = 'Invalid Email Address.'
    }
    if(!lpassword){
        errors.lpassword = 'Password is Required.'
    } else if(lpassword.length < 6) {
        errors.lpassword = 'Password must be greater than 6 characters.'
    }
    return errors;
}
export { loginvalidate,Validation}