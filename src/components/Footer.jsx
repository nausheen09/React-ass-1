import React from 'react'

export default function Footer() {
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
    {/* ---------------- */}
     <footer id="footer" className="overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="footer-top-area">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu">
                  <img src="main-logo.png" alt="logo"/>
                  <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li>
                        <a href="#">
                          <svg className="facebook">
                            <use href="#facebook" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="instagram">
                            <use href="#instagram" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="twitter">
                            <use href="#twitter" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="linkedin">
                            <use href="#linkedin" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="youtube">
                            <use href="#youtube" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 pb-3">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Quick Links</h5>
                  <ul className="menu-list list-unstyled text-uppercase">
                    <li className="menu-item pb-2">
                      <a href="#">Home</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">About</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Shop</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Blogs</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Help & Info Help</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item pb-2">
                      <a href="#">Track Your Order</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Returns Policies</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Shipping + Delivery</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>Do you have any queries or suggestions? <a href="mailto:">yourinfo@gmail.com</a>
                  </p>
                  <p>If you need support? Just give us a call. <a href="">+55 111 222 333 44</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </footer>
    {/* ---------------- */}
    <div id="footer-bottom">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-md-4 col-sm-6">
            <div className="Shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img src="dhl.png" alt="visa"/>
                <img src="shippingcard.png" alt="mastercard"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="payment-method d-flex">
              <p>Payment options:</p>
              <div className="card-wrap ps-2">
                <img src="visa.jpg" alt="visa"/>
                <img src="mastercard.jpg" alt="mastercard"/>
                <img src="paypal.jpg" alt="paypal"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="copyright">
              <p>© Copyright 2023 MiniStore. Design by <a href="https://templatesjungle.com/">TemplatesJungle</a> Distribution by <a href="https://themewagon.com">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
