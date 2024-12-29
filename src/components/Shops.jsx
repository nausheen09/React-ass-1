import React from 'react'

export default function Shops() {
  return (
   <>
   <section id="subscribe" className="container-grid padding-large position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
            <div className="col-md-6 col-sm-12">
              <div className="display-header pe-3">
                <h2 className="display-7 text-uppercase text-light">Subscribe Us Now</h2>
                <p>Get latest news, updates and deals directly mailed to your inbox.</p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <form className="subscription-form validate">
                <div className="input-group flex-wrap">
                  <input className="form-control btn-rounded-none" type="email" name="EMAIL" placeholder="Your email address here" required=""/>
                  <button className="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="instagram" className="padding-large overflow-hidden no-padding-top">
      <div className="container">
        <div className="row">
          <div className="display-header text-uppercase text-dark text-center pb-3">
            <h2 className="display-7">Shop Our Insta</h2>
          </div>
          <div className="d-flex flex-wrap">
            <figure className="instagram-item pe-2">
              <a href="https://templatesjungle.com/" className="image-link position-relative">
                <img src="insta-item1.jpg" alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure className="instagram-item pe-2">
              <a href="https://templatesjungle.com/" className="image-link position-relative">
                <img src="insta-item2.jpg" alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure className="instagram-item pe-2">
              <a href="https://templatesjungle.com/" className="image-link position-relative">
                <img src="insta-item3.jpg" alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure className="instagram-item pe-2">
              <a href="https://templatesjungle.com/" className="image-link position-relative">
                <img src="insta-item4.jpg" alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
            <figure className="instagram-item pe-2">
              <a href="https://templatesjungle.com/" className="image-link position-relative">
                <img src="insta-item5.jpg" alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <use href="#instagram"></use>
                  </svg>
                </div>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
