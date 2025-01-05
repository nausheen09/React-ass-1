import React from 'react'

export default function LatestCard(props) {
  return (
    <>
      <div className="col-lg-4 col-sm-12">
        <div className="card border-none me-3">
          <div className="card-image">
            <img src={props.image} alt={props.description} className="img-fluid" />
          </div>
        </div>
        <div className="card-body text-uppercase">
          <div className="card-meta text-muted">
            <span className="meta-date">{props.description}</span>
            <span className="meta-category">- Gadgets</span>
          </div>
          <h3 className="card-title">
            <a href="#">{props.title}</a>
          </h3>
        </div>
      </div>
    </>
  )
}


