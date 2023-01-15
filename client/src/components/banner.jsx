import React from 'react'
import '../CSS/Site.css'

function Banner(props) {
  return (
    <div className='blnkbanner'>
    <h1>{props.name}</h1>
    </div>
  )
}

export default Banner
