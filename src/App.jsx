import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import Herosection from './components/Hero-section.jsx';
import Footer from './components/Footer.jsx';
import Testimonial from './components/Testimonial.jsx';
import LatestPosts from './components/LatestPosts.jsx';
import Shops from './components/Shops.jsx';
import LatestCard from './components/LatestCard.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // Manage theme state

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Apply the theme class to the body
    document.body.className = isDarkMode ? 'light-theme' : 'dark-theme';
  };

  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        tabIndex={0}
      >
        {/* --------Navbar------ */}
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        {/* -------Herosection------- */}
        <Herosection />

        {/* ---------cards props , count-method----- */}
        {/* Mobile Products Section */}
        <section
          id="mobile-products"
          className="product-store position-relative padding-large no-padding-top"
        >
          <div className="container">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
              <div className="btn-right">
                <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">
                  Go to Shop
                </a>
              </div>
            </div>
            <div className="row g-4">
              <Card
                title="Iphone 10"
                description="$980"
                image="product-item1.jpg"
                handleAddToCart={handleAddToCart}
              />
              <Card
                title="Iphone 12"
                description="$1200"
                image="product-item2.jpg"
                handleAddToCart={handleAddToCart}
              />
              <Card
                title="Iphone 13"
                description="$1300"
                image="product-item3.jpg"
                handleAddToCart={handleAddToCart}
              />
              <Card
                title="Iphone 14"
                description="$1500"
                image="product-item4.jpg"
                handleAddToCart={handleAddToCart}
              />
            </div>
            <div className="cart-counter text-center mt-4">
              <h3>Items in Cart: {count}</h3>
            </div>
          </div>
        </section>

        {/* ------LatestPosts-------- */}
        <LatestPosts />

        {/* ------LatestPosts-------- */}
        <section id="latest-blog" className="padding-large">
          <div className="container">
            <div className="row">
              <div className="display-header d-flex justify-content-between pb-3">
                <h2 className="display-7 text-dark text-uppercase">Latest Posts</h2>
                <div className="btn-right">
                  <a href="blog.html" className="btn btn-medium btn-normal text-uppercase">Read Blog</a>
                </div>
              </div>
              <div className="post-grid d-flex flex-wrap justify-content-between">
                <LatestCard
                  title="Get some cool gadgets in 2023"
                  description="feb 22, 2023"
                  image="post-item1.jpg"
                />
                <LatestCard
                  title="Technology Hack You Won't Get"
                  description="feb 25, 2023"
                  image="post-item2.jpg"
                />
                <LatestCard
                  title="Top 10 Small Camera In The World"
                  description="feb 24, 2023"
                  image="post-item3.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ------Testimonial-------- */}
        <Testimonial />

        {/* -------Shops------- */}
        <Shops />

        {/* ------Footer-------- */}
        <Footer />
      </div>
    </>
  );
}
export default App;