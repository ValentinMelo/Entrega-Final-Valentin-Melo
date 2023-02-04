import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="top-navegador">
        <div className="topnav">
            <Link className="titulo" to="/">React Clothing</Link>
    
            <div className='menu-principal'>
              <Link to="/productos/camisetas">Camisetas</Link>
              <Link to="/productos/camisas">Camisas</Link>
              <Link to="/productos/pantalones">Pantalones</Link>
              <Link to="/productos/calzado">Calzado</Link>
              <Link to="/productos/abrigos">Abrigos</Link>
            </div>

        </div>

        <CartWidget></CartWidget>

    </header>
  )
}

export default NavBar