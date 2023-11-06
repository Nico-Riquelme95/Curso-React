import { GrCart } from "react-icons/gr"

export const CartWidget = () => {
    return (
    <div className="d-flex">
        <GrCart size={30}/>
        <p className="mx-3">0</p>
    </div>
    )
}