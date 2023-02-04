import React from 'react'
import { BrowserRouter, } from "react-router-dom";
import Rutas from "./PublicRoutes";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Rutas />
        </BrowserRouter>
    )
}

export default AppRouter