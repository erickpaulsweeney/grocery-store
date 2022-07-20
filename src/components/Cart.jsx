import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";
import CartItem from "./CartItem";

function Cart(props) {
    let contextData = useContext(ProductsContext);

    return (
        <div className="container-cart" style={{ right: contextData.show ? '0' : '-30%' }}>
            <div className="cart-title">Cart Items</div>
            <div className="cart-main">
                {contextData.amount.map((el, idx) => el === 0 ? null : <CartItem key={contextData.products[idx]._id + idx} idx={idx}/>)}
            </div>
            <div className="cart-total">Cart Total: ${contextData.total}</div>
        </div>
    )
}

export default Cart;