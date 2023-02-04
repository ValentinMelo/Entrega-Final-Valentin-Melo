import React from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'


const CartWidget = () => {

  const { totalCantidad, cart } = useCartContext()

  return (
      <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
          <FaShoppingCart />
          <span className='span'>{totalCantidad()}</span>
      </Link>
  )
}

export default CartWidget