import React from 'react'

export default function Product(props) {
  return (
    <div>
      <h1> Name - {props.name}  , price - {props.price} </h1>
      <img src={props.image} alt="" />
    </div>
  )
}
