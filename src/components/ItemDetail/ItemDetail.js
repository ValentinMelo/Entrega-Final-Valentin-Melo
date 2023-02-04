
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ( {id, name, stock, category, image, description, price} ) => {

    const { agregarAlCarrito, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {
            id,
            name,
            stock,
            category,
            image,
            description,
            price,
            cantidad
        }

        parseInt(item.price)

        agregarAlCarrito(item)
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt=""/>
            <br/>
            <small>Categoría: {category}</small>
            <p>{description}</p>
            <p>Precio: {price}</p>

            {
                !isInCart(id)
                    ? <ItemCount 
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            max={stock}
                            onAdd={handleAgregar}
                        />
                    : <Link to="/cart" className="btn btn-dark">Terminar mi compra</Link>
            }
            
            <hr/>
            
            <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail