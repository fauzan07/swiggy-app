import React, {useContext}  from 'react';
import { AuthContext } from '../../context/Auth';
import './Navbar.css';
import Logo from './logo.jpg';
// import Logo from '../../assets/kido-logo.jpg';
import fire from '../../config/Fire';

const Navbar=()=> {
  const { currentUser } = useContext(AuthContext);
  var str= currentUser.email
  var firstStringChar = str.charAt(0); 
  var firstStringName = str.split('@')[0];
    

    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
            <img src={Logo} width="200" alt="icon"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#"><i className="fa fa-home pr-3" aria-hidden="true"></i>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#"><i className="fa fa-user pr-3" aria-hidden="true"></i>{firstStringName}</a>
                    </li>
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#"><i className="fa fa-shopping-cart pr-3" aria-hidden="true"></i>Cart</a>
                    </li>
                    <li className="nav-item pl-4">
                        <a className="nav-link" onClick={()=>fire.auth().signOut()}><i className="fas fa-power-off pr-3"></i>Sign-Out</a>
                    </li>
                    </ul>
                </div>
                </nav>

            {/* <nav className="navbar navbar-light bg-blue fixed-top bg-border-btm">
                    <div className="text-center Usericon">
                        <img src={Logo} width="200" alt="icon"/>
                    </div>
                    <div className="nav-sign-out">
                        <a className="nav-signout text-primary"><i className="fas fa-power-off pr-3"></i><small>cart</small></a>
                    </div>
                    <div className="nav-sign-out">
                        <a className="nav-signout text-primary" onClick={()=>fire.auth().signOut()}><i className="fas fa-power-off pr-3"></i><small>Sign-Out</small></a>
                    </div>
                    <div className="nav-sign-out">
                        <a className="nav-signout text-primary"><i className="fas fa-power-off pr-3"></i><small>cart</small></a>
                    </div>
            </nav> */}

        </div>
    );
}



export default Navbar;