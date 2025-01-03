import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id}=useParams();
  const navigate = useNavigate();

  const [apiData,setapiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjIxNTkwZGVmNWRjMjNiZjU0M2UzYzNjZjcxYTgyNCIsIm5iZiI6MTczNTIwMDQyMi44OCwic3ViIjoiNjc2ZDBlYTY0MTQxOWFhODUwOTI3YmFmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.pCgxA-qKmVSnFvpuWQbZcy6gK62aLKCaRMx6R9pzA2E'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}}/>
      <iframe width="90%" height="90%"
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='Trailer' frameBorder='o' allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player