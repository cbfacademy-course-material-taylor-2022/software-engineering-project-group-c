import React from 'react'
import '../CSS/Site.css'

function Banner(props) {
  return (

    <h1 className='bannerTitle'> {props.name}</h1>
  )
}

export default Banner
