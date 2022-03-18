import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Main.css'
import ClipLoader from "react-spinners/ClipLoader";
import MyModal from './MyModal';

const Main = () => {
  let limit = 50
  const requestUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalKey, setModalKey] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await fetch(requestUrl).then(res => res.json()).then(res => res.results)
      setData(result)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const cardOnClick = (index) => {
    setModalOpen(true);
    setModalKey(index + 1)
  }

  return (
    <div className="main">
      <MyModal modalOpen={modalOpen} modalKey={modalKey} setModalOpen={setModalOpen} />
      {
        isLoading ?
          <ClipLoader color="#4D77FF" size={35} />
          :
          data.map((item, index) => (
            <Card key={index} data={item} index={index} onClick={() => {
              cardOnClick(index)
            }} />
          ))

      }
    </div>
  )
}

export default Main