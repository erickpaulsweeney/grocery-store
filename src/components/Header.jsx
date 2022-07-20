import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";

function Header() {
    let contextData = useContext(ProductsContext);
    let quantity = contextData.amount.reduce((prev, curr) => prev + curr);
    
    return (
        <div className="container-header">
            <div className="page-name">GOKiS</div>
            <div className="container-header-cart" onClick={() => contextData.setShow(!contextData.show)}>
                <img src="/images/cart.png" className="icon-cart" alt="Cart" />
                <div className="bubble" style={{ zIndex: quantity > 0 ? '2' : '-1' }}>{quantity}</div>
            </div>
        </div>
    )
}

export default Header;