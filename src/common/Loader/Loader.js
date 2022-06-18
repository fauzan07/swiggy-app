import React from 'react';
import Spinner from './assets/loading.gif';


function Loader() {
    return (
       
        <div className="text-center spinner">
        <img src={Spinner} className="img-fluid" alt="loading"/>
        </div>
        
    )
}

export default Loader;
