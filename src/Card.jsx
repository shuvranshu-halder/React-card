import React from 'react'
import p1 from './assets/p1.png';

function Card({imageNaam,altTag, title}) {
  return (
    <div className="card">
        <img className="image" src={imageNaam} alt={altTag}></img>
        <h2 className='title'>{title}</h2>
        <div className='description'>a long estaba long establia long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it</div>
    </div>
  )
}

export default Card