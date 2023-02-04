import ItemsListContainer from "../components/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";
import Cart from "../components/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom"
import Checkout from "../components/Checkout/Checkout";
import Slider from "../components/slider/Slider";

const Rutas = () => {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={ <Slider /> }/>
                <Route path="/tienda" element={ <ItemsListContainer /> }/>
                <Route path="/productos/:categoryId" element={ <ItemsListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="*" element={ <Navigate to={"/"}/> }/>
            </Routes>  
        </>
    )
}

export default Rutas