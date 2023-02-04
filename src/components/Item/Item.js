import { Link } from "react-router-dom"

const Item = ({id, name, size, price, category, image, stock}) => {
    return (
        <div className="col-2 m-3 container text-center">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>Precio: {price}</p>      
            <p>Talle: {size}</p>
            <p>Categoria: {category}</p>
            <p>Stock: {stock}</p>
            <Link className='btn btn-dark' to={`/detail/${id}`} >Ver producto</Link>
        </div>
    )
}

export default Item