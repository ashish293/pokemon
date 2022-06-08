import React, { useRef, useEffect, useState } from 'react'
import Card from './Card'
import './Main.css'
import ClipLoader from "react-spinners/ClipLoader";
import MyModal from './MyModal';
import Header from './Header';
import InfiniteScroll from 'react-infinite-scroll-component';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
const limit = 10;
const fetchPokemonList = async (offset) => {
  const requestUrl = baseUrl + `?limit=${limit}&offset=${offset}`
  return await fetch(requestUrl).then(res => res.json()).then(res => res.results)
}

const Main = () => {
  let offset = useRef(0);
  // const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalKey, setModalKey] = useState(1)

  useEffect(() => {
    const loadFirstData = async () => {
      // setIsLoading(true)
      const result = await fetchPokemonList(0);
      setData(result);
      // setIsLoading(false)
      offset.current += 10;

    }
    loadFirstData()
  }, [])

  const cardOnClick = (index) => {
    setModalOpen(true);
    setModalKey(index + 1)
  }
  const fetchMoreData = () => {
    setTimeout(async () => {
      let result = await fetchPokemonList(offset.current)
      setData([...data, ...result])
      offset.current += 10;
    }, 1000)

  }
  return (
    <>
      <Header />
      <div className="main" >
        <MyModal modalOpen={modalOpen} modalKey={modalKey} setModalOpen={setModalOpen} />
        <InfiniteScroll dataLength={data.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<div className='moreLoader'><ClipLoader color="#4D77FF" size={35} /></div>}
        >
          {
            data &&
            data.map((item, index) => (
              <Card key={index} data={item} index={index} onClick={() => {
                cardOnClick(index)
              }} />
            ))

          }
        </InfiniteScroll>
      </div>
    </>
  )
}

export default Main