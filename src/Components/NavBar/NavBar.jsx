import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
    <nav className="d-flex justify-content-around p-3">
        <img src="https://i.pinimg.com/originals/52/47/ec/5247ec421218ab48b71c132aaf2fe5c1.jpg" alt="" style={{width: "150px"}}/>
        <div>
            <button className="btn btn-success mx-3">Inicio</button>
            <button className="btn btn-success mx-3">Productos</button>
            <button className="btn btn-success mx-3">Contactos</button>
        </div>
        <CartWidget/>
    </nav>
    )
}