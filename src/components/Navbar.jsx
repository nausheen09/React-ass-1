import React from 'react'

export default function Navbar() {
  return (
   <>
   {/* <nav classNameName="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    
     <div classNameName="container-fluid">
       
       <button
         data-mdb-collapse-init
         classNameName="navbar-toggler"
         type="button"
         data-mdb-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <i classNameName="fas fa-bars"></i>
       </button>
   
       
       <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
        
         <a classNameName="navbar-brand mt-2 mt-lg-0" href="#">
           <img
             src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
             height="15"
             alt="MDB Logo"
             loading="lazy"
           />
         </a>
       
         <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
           <li classNameName="nav-item">
             <a classNameName="nav-link" href="#">Dashboard</a>
           </li>
           <li classNameName="nav-item">
             <a classNameName="nav-link" href="#">Team</a>
           </li>
           <li classNameName="nav-item">
             <a classNameName="nav-link" href="#">Projects</a>
           </li>
         </ul>
    
       </div>
     
   
      
       <div classNameName="d-flex align-items-center">
       
         <a classNameName="text-reset me-3" href="#">
           <i classNameName="fas fa-shopping-cart"></i>
         </a>
   
        
         <div classNameName="dropdown">
           <a
             data-mdb-dropdown-init
             classNameName="text-reset me-3 dropdown-toggle hidden-arrow"
             href="#"
             id="navbarDropdownMenuLink"
             role="button"
             aria-expanded="false"
           >
             <i classNameName="fas fa-bell"></i>
             <span classNameName="badge rounded-pill badge-notification bg-danger">1</span>
           </a>
           <ul
             classNameName="dropdown-menu dropdown-menu-end"
             aria-labelledby="navbarDropdownMenuLink"
           >
             <li>
               <a classNameName="dropdown-item" href="#">Some news</a>
             </li>
             <li>
               <a classNameName="dropdown-item" href="#">Another news</a>
             </li>
             <li>
               <a classNameName="dropdown-item" href="#">Something else here</a>
             </li>
           </ul>
         </div>
       
         <div classNameName="dropdown">
           <a
             data-mdb-dropdown-init
             classNameName="dropdown-toggle d-flex align-items-center hidden-arrow"
             href="#"
             id="navbarDropdownMenuAvatar"
             role="button"
             aria-expanded="false"
           >
             <img
               src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
               classNameName="rounded-circle"
               height="25"
               alt="Black and White Portrait of a Man"
               loading="lazy"
             />
           </a>
           <ul
             classNameName="dropdown-menu dropdown-menu-end"
             aria-labelledby="navbarDropdownMenuAvatar"
           >
             <li>
               <a classNameName="dropdown-item" href="#">My profile</a>
             </li>
             <li>
               <a classNameName="dropdown-item" href="#">Settings</a>
             </li>
             <li>
               <a classNameName="dropdown-item" href="#">Logout</a>
             </li>
           </ul>
         </div>
       </div>
      
     </div>
    
   </nav> */}
   
   {/* <div style="display: none;">
      <symbol id="search"  viewBox="0 0 32 32">
        <title>Search</title>
        <path fill="currentColor" d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z" />
      </symbol>
      <symbol id="user" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </symbol>
      <symbol id="cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </symbol>
    </div>   */}

    <header id="header" className="  text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="main-logo.png" className="logo"/>
          </a>
          <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <svg className="navbar-icon">
              <use href="#navbar-icon"></use>
            </svg>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={0} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand" href="index.html">
                <img src="main-logo.png" className="logo"/>
              </a>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link me-4 active" href="#billboard">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#company-services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#mobile-products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#smart-watches">Watches</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#yearly-sale">Sale</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#latest-blog">Blog</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="about.html" className="dropdown-item">About</a>
                    </li>
                    <li>
                      <a href="blog.html" className="dropdown-item">Blog</a>
                    </li>
                    <li>
                      <a href="shop.html" className="dropdown-item">Shop</a>
                    </li>
                    <li>
                      <a href="cart.html" className="dropdown-item">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html" className="dropdown-item">Checkout</a>
                    </li>
                    <li>
                      <a href="single-post.html" className="dropdown-item">Single Post</a>
                    </li>
                    <li>
                      <a href="single-product.html" className="dropdown-item">Single Product</a>
                    </li>
                    <li>
                      <a href="contact.html" className="dropdown-item">Contact</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      <li className="search-item pe-3">
                        <a href="#" className="search-button">
                          <svg className="search">
                            <use href="#search"></use>
                          </svg>
                        </a>
                      </li>
                      <li className="pe-3">
                        <a href="#">
                          <svg className="user">
                            <use href="#user"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <svg className="cart">
                            <use href="#cart"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  
   </>
  )
}
