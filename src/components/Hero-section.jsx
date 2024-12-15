import React from 'react'

export default function Herosection() {
  return (
    <>
<div className="p-5 text-center bg-image rounded-3"  style={{
    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
    height: "400px",
  }}> 
  <div className="mask" style={{ backgroundColor:"rgba(0, 0, 0, 0.6)",}}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Heading</h1>
        <h4 className="mb-3">Subheading</h4>
        <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
