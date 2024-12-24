import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import Herosection from './components/Hero-section.jsx'
import Footer from './components/Footer.jsx'
import Testimonial from './components/Testimonial.jsx'
import LatestPosts from './components/LatestPosts.jsx'

function App() {
  const [cartCount, setCartCount] = useState(0); // State for cart count

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // Increase cart count
    console.log('Item added to cart!'); 
  };

  return (
    <>
      {/* --------------navbar-------- */}
      <div><Navbar /></div>

      {/* --------------herosection-------- */}
      <div><Herosection /></div>

      {/* --------------cards props-------- */}
     {/* Mobile Products Section */}
     <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
        <div className="container">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
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
        </div>
      </section>


      {/* -----------LatestPosts----------- */}
      <LatestPosts />
      {/* -----------Testimonial----------- */}
      <Testimonial />

      {/* ----------Footer------------ */}
      <Footer />

    </>
  )
}

export default App





{/* <div className="row row-cols-1 row-cols-md-2 g-4 mt-2"> 
      <Card 
      title= "Beautiful City"
      description="Explore the beauty of this stunning city with us!"
      image= "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" /> 
       </div> */}