import React, { useState, useContext, useEffect } from 'react';
import fire from '../../config/Fire';
import { AuthContext } from '../../context/Auth';
import { withRouter, Redirect, Link } from 'react-router-dom';
// import Logo from '../../assets/logo.png';
import Logo from '../../assets/logo.jpg';
import AuthBanner from '../../assets/auth-img.png';


import './SignUp.css';


function SignUp(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fireErrors, setFireErrors] = useState("");


  const register = (event) => {
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password)
     .catch((error) => {
        setFireErrors(error.message)
     })
  }

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }



  let errorNotification = fireErrors ? 
  (<div className="alert alert-danger" role="alert">{fireErrors}</div>) : null;

  return(
    <section className="auth">
    <div className="authentication">
    <div className="container-fluid">
        <div className="row justify-content-center">
       
            <div className="col-md-6 col-lg-5">
            <div className="logo-img mt-5">
            <img src={Logo} width="200" alt="icon"/>
            </div>
                <div className="mt-4 pr-5 py-4">
                <h1 style={{fontSize : "38px", fontWeight : "600"}}>Hungry ?</h1>
                <p style={{fontSize : "20px"}}>Order food from favourite restaurants near you.</p>
                {/* <h2>Sign Up</h2> */}
                <div>{errorNotification}</div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="text" className="form-control" id="email" name="email" value={email} placeholder="Enter a email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter a password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <button onClick={register} className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign up Now</button>
                    </div>
                    {/* <div className="or py-3">
                    <h3><span>or</span></h3>
                    </div> */}
                    <div className="row pt-3">
                      <div className="col-lg-12">
                      <p>Have an account? <Link className="a-link" to="/login">Log in</Link></p>
                      </div>
                    </div>
                </div>
            </div>

            <div className="offset-lg-1 col-lg-5">
            {/* <img src={AuthBanner} className="auth-banner img-fluid" alt="banner-img" />   */}
            <div className="auth-banner"></div>
            </div>
        </div>
    </div>
    </div>
    </section>




  );

}

export default withRouter(SignUp);
