// import React from 'react'

// export default function Card(props) {
//   return (
//     <>
//       {/* ---------cards new Design--------- */}
//       <div class="col swiper-slide">
//         <div class="product-card position-relative g-4">
//           <div class="image-holder">
//             <img src="{props.image}" alt="product-item" class="img-fluid" />
//           </div>
//           <div class="cart-concern position-absolute">
//             <div class="cart-button d-flex">
//               <a href="#" class="btn btn-medium btn-black">Add to Cart<svg class="cart-outline"><use xlink:href="#cart-outline"></use></svg></a>
//             </div>
//           </div>
//           <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
//             <h3 class="card-title text-uppercase">
//               <a href="#">{props.title}</a>
//             </h3>
//             <span class="item-price text-primary">{props.description}</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from 'react';

export default function Card({ title, description, image, handleAddToCart }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="product-card position-relative">
        <div className="image-holder">
          <img src={image} alt={title} className="img-fluid" />
        </div>
        <div className="cart-concern position-absolute">
          <div className="cart-button d-flex">
            <button
              className="btn btn-medium btn-black"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
          <h3 className="card-title text-uppercase">{title}</h3>
          <span className="item-price text-primary">{description}</span>
        </div>
      </div>
    </div>
  );
}


{/* <section id="smart-watches" className="product-store padding-large position-relative">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div>
          <div className="swiper product-watch-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item6.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Pink watch</a>
                    </h3>
                    <span className="item-price text-primary">$870</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item7.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Heavy watch</a>
                    </h3>
                    <span className="item-price text-primary">$680</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item8.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">spotted watch</a>
                    </h3>
                    <span className="item-price text-primary">$750</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item9.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">black watch</a>
                    </h3>
                    <span className="item-price text-primary">$650</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item10.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">black watch</a>
                    </h3>
                    <span className="item-price text-primary">$750</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section> */}

{/* ------------props cards------------ */ }
{/* <div className="col">
        <div className="card">
          <img
            src={props.image}
            className="card-img-top"
            alt={props.title}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div> */}

{/* <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item2.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 11</a>
                    </h3>
                    <span className="item-price text-primary">$1100</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item3.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 8</a>
                    </h3>
                    <span className="item-price text-primary">$780</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item4.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 13</a>
                    </h3>
                    <span className="item-price text-primary">$1500</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="product-item5.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use href="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">Iphone 12</a>
                    </h3>
                    <span className="item-price text-primary">$1300</span>
                  </div>
                </div>
              </div> */}

