import React from 'react'

function rulesItem({image, name, property}) {
  return (
    <div className='rulesItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{property}</p>
    </div>
  )
}

export default rulesItem