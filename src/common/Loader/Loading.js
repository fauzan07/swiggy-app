import React from 'react';
import Spinning from './assets/loading.gif';


function Loader() {
    return (
       
        <div className="text-center spinner">
        <img src={Spinning} className="img-fluid" alt="loading"/>
        </div>
        
    )
}

export default Loader;
