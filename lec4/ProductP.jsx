import React from 'react'
import Product from './Product'
import img from '../assets/hero.png'
import Nopage from './Nopage'
export default function ProductP() {
  return (
    <div>
      <Product name="Laptop" price = "40000" image={img}></Product>
    </div>
  )
}
