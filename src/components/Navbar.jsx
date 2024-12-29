import React, { useState, useEffect } from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";



const handleOrderClick = () => {
  // Simulate setting a userName to fetch data
  setUserName("1"); // Replace "1" with dynamic user input or form value
};

export default function Navbar({ toggleTheme, isDarkMode }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [showForm, setShowForm] = useState(false); // State to control input visibility
  const [orderData, setOrderData] = useState(null); // State to store order details
  const [userName, setUserName] = useState("");

  // Fetch order details when userName is updated
  useEffect(() => {
    if (userName) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => setOrderData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [userName]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data:", formData);
    // You can add further actions here, like sending data to an API
  };

  const handleOrderClick = () => {
    // Simulate setting a userName to fetch data
    setUserName("1"); // Replace "1" with dynamic user input or form value
  };


  return (
    <>
      <header id="header" className="text-black bg-light">
        <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="main-logo.png" className="logo" />
            </a>
            <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">

            </button>
            <div className="offcanvas offcanvas-end" tabIndex={0} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
              <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand" href="index.html">
                  <img src="main-logo.png" className="logo" />
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
                  <li className="nav-item">
                    <a
                      className="nav-link me-4"
                      href="#contact"
                      onClick={() => setShowForm(!showForm)} // Toggle form visibility
                    >
                      <MdMarkEmailRead style={{ marginRight: "8px" }} />
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-primary" onClick={handleOrderClick}>
                      Order
                    </button>
                  </li>
                  <li className="nav-item">
                    <div className="theme-toggle ms-3" onClick={toggleTheme} style={{ cursor: "pointer" }}>
                      {isDarkMode ? <FaMoon size={20} /> : <GoSun size={20} />}
                    </div>
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
                      {/* <ul className="d-flex justify-content-end list-unstyled">
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
                    </ul> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Conditional rendering for the form */}
      {showForm && (
        <div className="form-container text-center mt-3">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control mb-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control mb-2"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}


 {/* Display fetched order details */}
 {orderData && (
        <div className="order-details text-center mt-4">
          <h3>Order Details:</h3>
          <p>
            <strong>Name:</strong> {orderData.name}
          </p>
          <p>
            <strong>Email:</strong> {orderData.email}
          </p>
          <p>
            <strong>Phone:</strong> {orderData.phone}
          </p>
          <p>
            <strong>Items:</strong> {orderData.website}
          </p>
        </div>
      )}


    </>
  )
}
