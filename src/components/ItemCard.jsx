import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";

function ItemCard(props) {
    let contextData = useContext(ProductsContext);

    return (
        <div className="item-card">
            <img src={props.image} className="item-img" alt="Product" />
            <div className="container-details">
                <div className="container-upper">
                    <div className="item-name">{props.name}</div>
                    <div className="item-price">${props.price}</div>
                </div>
                <div className="container-button">
                    <button className="decrement" onClick={() => {
                        if (contextData.amount[props.idx] > 0) {
                            let newCart = contextData.amount.slice();
                            newCart[props.idx]--;
                            contextData.setAmount(newCart);
                            let newTotal = JSON.parse(JSON.stringify(contextData.total));
                            newTotal = Number((newTotal - contextData.products[props.idx].price).toFixed(2));
                            contextData.setTotal(newTotal);
                        }
                    }}>-</button>
                    <div className="quantity">{contextData.amount[props.idx]}</div>
                    <button className="increment" onClick={() => {
                        let newCart = contextData.amount.slice();
                        newCart[props.idx]++;
                        contextData.setAmount(newCart);
                        let newTotal = JSON.parse(JSON.stringify(contextData.total));
                        newTotal = Number((newTotal + contextData.products[props.idx].price).toFixed(2));
                        contextData.setTotal(newTotal);
                    }}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;