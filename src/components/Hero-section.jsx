import React from 'react'

export default function Herosection() {
  return (
    <>
    {/* ------------ */}
  <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src="banner-image.png" alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src="banner-image.png" alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-prev">
        <svg className="chevron-left">
          <use href="#chevron-left" />
        </svg>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-next">
        <svg className="chevron-right">
          <use href="#chevron-right" />
        </svg>
      </div>
    </section>
    {/* ------------ */}
  <section id="company-services" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="cart-outline">
                  <use href="#cart-outline" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Free delivery</h3>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="quality">
                  <use href="#quality" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Quality guarantee</h3>
                <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="price-tag">
                  <use href="#price-tag" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Daily offers</h3>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="shield-plus">
                  <use href="#shield-plus" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">100% secure payment</h3>
                <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
