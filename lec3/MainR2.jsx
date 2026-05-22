import React from 'react'
import { BrowserRouter as Rt , Route, Routes,Link } from 'react-router-dom'
import Home2 from './Home2'
import Product from './Product'
import Nopage from './Nopage'
import ProductP from './ProductP'
export default function MainR2() {
  return (
   <>
    <Rt>
        <div className='main-route'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Product">Product</Link></li>
            </ul>
        </div>

        <Routes>
            <Route path='/' element={<Home2/>}/>
            <Route path='/Product' element={<ProductP/>}/>
            <Route path='*' element={<Nopage/>}/>
        </Routes>
    </Rt>
   </>
  )
}
