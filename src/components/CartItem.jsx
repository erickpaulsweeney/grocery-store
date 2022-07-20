import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";

function CartItem(props) {
    let contextData = useContext(ProductsContext);
    let product = contextData.products[props.idx];
    
    return (
        <div className="cart-item">
            <div className="in-cart-name">{product.title}</div>
            <div className="in-cart-price">Price: ${product.price}</div>
            <div className="in-cart-quantity">Quantity: {contextData.amount[props.idx]}</div>
        </div>
    )
}

export default CartItem;