import React from 'react';
import Navbar from "../Navbar/Navbar";
import { AuthContext } from '../../context/Auth';
import product1 from "../../assets/p1.jpg";
import product2 from "../../assets/p2.jpg";
import product3 from "../../assets/p3.jpg";
import product4 from "../../assets/p4.jpg";
import product5 from "../../assets/p5.jpg";
import product6 from "../../assets/p6.jpg";
import product7 from "../../assets/p7.jpg";
import product8 from "../../assets/p8.jpg";



function Orders(props) {



  return(
    <>
            <Navbar />
            <section className="order-sec">
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                <div class="row justify-content-center">

                <div className="col-lg-3 mt-4">
                    <div class="card">
                      <img src={product1} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h3 class="card-title">Wow Momos</h3>
                        <p class="card-text">American, Snacks</p>
                        <p class="card-text d-flex justify-content-between">
                          <small class="rate-box-orange"><i class="fa fa-star pr-1" aria-hidden="true"></i>3.4</small>
                          <small class="text-muted">28 MINS</small>
                          <small class="text-muted">200 FOR TWO</small>
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mt-4">
                    <div class="card">
                      <img src={product2} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h3 class="card-title">Baba Falooda</h3>
                        <p class="card-text">Desserts, Beverages</p>
                        <p class="card-text d-flex justify-content-between">
                          <small class="rate-box-green"><i class="fa fa-star pr-1" aria-hidden="true"></i>4.5</small>
                          <small class="text-muted">28 MINS</small>
                          <small class="text-muted">200 FOR TWO</small>
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mt-4">
                    <div class="card">
                      <img src={product3} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h3 class="card-title">Kunafa World</h3>
                        <p class="card-text">Desserts, Beverages</p>
                        <p class="card-text d-flex justify-content-between">
                          <small class="rate-box-orange"><i class="fa fa-star pr-1" aria-hidden="true"></i>3.4</small>
                          <small class="text-muted">28 MINS</small>
                          <small class="text-muted">200 FOR TWO</small>
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mt-4">
                    <div class="card">
                      <img src={product4} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h3 class="card-title">Hardeep Punjab</h3>
                        <p class="card-text">Indian, Chinese</p>
                        <p class="card-text d-flex justify-content-between">
                          <small class="rate-box-green"><i class="fa fa-star pr-1" aria-hidden="true"></i>3.8</small>
                          <small class="text-muted">28 MINS</small>
                          <small class="text-muted">200 FOR TWO</small>
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mt-4">
                    <div class="card">
                      <img src={product5} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h3 class="card-title">KFC</h3>
                        <p class="card-text">American, Snacks, Biryani</p>
                        <p class="card-text d-flex justify-content-between">
                          <small class="rate-box-orange"><i class="fa fa-star pr-1" aria-hidden="true"></i>3.4</small>
                          <small class="text-muted">28 MINS</small>
                          <small class="text-muted">200 FOR TWO</small>
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mt-4">
                    <div class="card">
                      <img src={product6} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h3 class="card-title">Burger King</h3>
                        <p class="card-text">American, Fast Food</p>
                        <p class="card-text d-flex justify-content-between">
                          <small class="rate-box-orange"><i class="fa fa-star pr-1" aria-hidden="true"></i>3.4</small>
                          <small class="text-muted">28 MINS</small>
                          <small class="text-muted">200 FOR TWO</small>
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mt-4">
                    <div class="card">
                      <img src={product7} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h3 class="card-title">Amore Gelato</h3>
                        <p class="card-text">Ice Cream, Desserts</p>
                        <p class="card-text d-flex justify-content-between">
                          <small class="rate-box-green"><i class="fa fa-star pr-1" aria-hidden="true"></i>4.4</small>
                          <small class="text-muted">28 MINS</small>
                          <small class="text-muted">200 FOR TWO</small>
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 mt-4">
                    <div class="card">
                      <img src={product8} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h3 class="card-title">La Pino'z Pizza</h3>
                        <p class="card-text">Pizzas</p>
                        <p class="card-text d-flex justify-content-between">
                          <small class="rate-box-orange"><i class="fa fa-star pr-1" aria-hidden="true"></i>3.4</small>
                          <small class="text-muted">28 MINS</small>
                          <small class="text-muted">200 FOR TWO</small>
                          </p>
                      </div>
                    </div>
                  </div>
                   
                 
                  </div>

                  </div>

                </div>
            </div>
            </section>
        </>
  );

}

export default Orders;
