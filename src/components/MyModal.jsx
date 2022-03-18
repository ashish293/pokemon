import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './MyModal.css'

const baseImage = "https://cdn.traction.one/pokedex/pokemon/"
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    borderRadius: 20,
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const modalColors = {
  'grass': ['#65c18c', '#c1f4c5'],
  'fire': ['#F76E11', '#FF9F45'],
  'water': ['#5EE6EB', '#83ebee'],
  'ground': ['#CEAB93', '#d0bbac'],
  'poison': ['#ca6dd4', '#cd9cd2'],
  'bug': ['#E2DEA9', '#d6d5be'],
  'fairy': ['#F68989', '#eab4b4'],
  'normal': ['#23404c', '#3a5764']
}

const MyModal = (props) => {
  const { modalOpen, setModalOpen, modalKey } = props
  const [data, setData] = useState()
  const [leftBg, setLeftBg] = useState()
  const [rightBg, setRightBg] = useState()
  const requestUrl = "https://pokeapi.co/api/v2/pokemon/"
  useEffect(() => {
    const fetchData = async () => {
      const pokeData = await fetch(requestUrl + modalKey).then(res => res.json())
      setData(pokeData)
      setLeftBg(modalColors[pokeData.types[0].type.name][0])
      setRightBg(modalColors[pokeData.types[0].type.name][1])
    }
    fetchData();
  }, [modalKey])

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal-box">
        <div className="left" style={{ backgroundColor: leftBg }} >
          <LazyLoadImage
            alt="pokemon"
            className="modal-img"
            src={baseImage + modalKey + ".png"} // use normal <img> attributes as props
          />
        </div>
        <div className="right" style={{ backgroundColor: rightBg }}>
          {data && (
            <>
              <p className="modal-name"> {data.name}</p>
              <p className="modal-type">{data.types[0].type.name}</p>
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default MyModal