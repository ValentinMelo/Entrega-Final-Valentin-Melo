import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <Link to="/" className="btn btn-dark">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
                <hr/>
        
                {
                    cart.map(item => (

                        
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: {item.price * item.cantidad}</p>
                            <button onClick={() => removerItem(item.id)} className="btn btn-dark">
                            <FaTrashAlt /></button>
                            <hr/>
                        </div>
                        
                    ))
                }

                <h4>Total: { totalCart() }</h4>
            
            <button className="btn btn-danger" onClick={emptycart}>Vaciar</button>
            <Link className="btn btn-dark" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart