import React, { useState } from 'react'
import './Card.css'
import MyModal from './MyModal'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const baseImage = "https://cdn.traction.one/pokedex/pokemon/"

const Card = ({ data, index }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <MyModal modalOpen={modalOpen} modalKey={index + 1} setModalOpen={setModalOpen} />

      <div className="card" onClick={() => setModalOpen(true)}>
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
    </>
  )
}

export default Card