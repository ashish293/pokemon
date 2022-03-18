import React from 'react'
import './Card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const baseImage = "https://cdn.traction.one/pokedex/pokemon/"

const Card = ({ data, index, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <LazyLoadImage
        alt="pokemon"
        className="card-img"
        src={baseImage + (index + 1) + ".png"} // use normal <img> attributes as props
      />
      {/* <img className="card-img" src={baseImage + (index + 1) + ".png"} /> */}
      <div className="brief">
        <h3 className="name">{data.name}</h3>
        <h2>{index + 1}</h2>
      </div>
    </div>
  )
}

export default Card