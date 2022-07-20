import { useContext, useState } from "react";
import ProductsContext from "../contexts/ProductsContext";
import Header from "./Header";
import ItemsList from "./ItemsList";
import Cart from "./Cart";

function Main() {
    let contextData = useContext(ProductsContext);
    let amount = new Array(contextData.length).fill(0);
    let [cart, setCart] = useState(amount);
    let [total, setTotal] = useState(0);
    let [show, setShow] = useState(false);

    return (
        <div className="container-all">
            <ProductsContext.Provider value={{ products: contextData, amount: cart, setAmount: setCart, total: total, setTotal: setTotal, show: show, setShow: setShow }}>
                <Header />
                <ItemsList />
                <Cart items={cart} />
            </ProductsContext.Provider>
        </div>
    )
}

export default Main;