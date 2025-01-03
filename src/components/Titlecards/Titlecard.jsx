import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const Titlecard = ({title,category}) => {

  const [apiData,setapiData]=useState([])

const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjIxNTkwZGVmNWRjMjNiZjU0M2UzYzNjZjcxYTgyNCIsIm5iZiI6MTczNTIwMDQyMi44OCwic3ViIjoiNjc2ZDBlYTY0MTQxOWFhODUwOTI3YmFmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.pCgxA-qKmVSnFvpuWQbZcy6gK62aLKCaRMx6R9pzA2E'
  }
};


const handlewheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handlewheel)
},[]);

  return (
    <div className='title-card'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecard