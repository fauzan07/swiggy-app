import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from '../../context/Auth';
import banner1 from "../../assets/b1.png";
import banner2 from "../../assets/b2.jpg";
import banner3 from "../../assets/b3.jpg";
import banner4 from "../../assets/b4.jpg";
import Orders from "../../components/Orders/Orders"


function Home(props) {



  return(
    <>
            <Navbar />
            <section className="banner-sec mt-5">
            <div className="container-fluid py-5 px-5">
              <div className="row justify-content-center">
                <div className="col-lg-3 mt-4">
                  <img src={banner1} width="260" alt=""/>
                  </div>
                  <div className="col-lg-3 mt-4">
                  <img src={banner2} width="260" alt=""/>
                  </div>
                  <div className="col-lg-3 mt-4">
                  <img src={banner3} width="260" alt=""/>
                  </div>
                  <div className="col-lg-3 mt-4">
                  <img src={banner4} width="260" alt=""/>
                  </div>

                </div>
            </div>
            </section>

            <Orders/>
        </>
  );

}

export default Home;
