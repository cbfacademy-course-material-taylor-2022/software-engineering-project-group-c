import React from 'react'
import '../CSS/Site.css'

function button(props) {
  return (
    <button className='btn'> {props.name} </button>
  )
}

export default button;