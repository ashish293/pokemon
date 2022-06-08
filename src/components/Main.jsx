import React, { useRef, useEffect, useState } from 'react'
import Card from './Card'
import './Main.css'
import ClipLoader from "react-spinners/ClipLoader";
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
  const [data, setData] = useState([])

  useEffect(() => {
    const loadFirstData = async () => {
      const result = await fetchPokemonList(0);
      setData(result);
      offset.current += 10;
    }
    loadFirstData()
  }, [])

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
        <InfiniteScroll dataLength={data.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<div className='moreLoader'><ClipLoader color="#4D77FF" size={35} /></div>}
        >
          {
            data &&
            data.map((item, index) => (
              <Card key={index} data={item} index={index} />
            ))
          }
        </InfiniteScroll>
      </div>
    </>
  )
}

export default Main