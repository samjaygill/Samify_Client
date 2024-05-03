import React from 'react'
import "./css/RandomAlbum.css"

function Rating({rating}) {
    const stars = Array.from({ length: rating }, (_, index) => index + 1);
  return (
    <div>
    {stars.map((_, index) => (
      <span key={index} className='stars'>&#9733;</span> 
    ))}
  </div>
  )
}

export default Rating