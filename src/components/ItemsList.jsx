import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";
import ItemCard from "./ItemCard";

function ItemsList(props) {
    let contextData = useContext(ProductsContext);

    return (
        <div className="items-list">
            {contextData.products.map((el, idx) => <ItemCard key={el._id} idx={idx} name={el.title} price={el.price} image={el.images[0]} amount={contextData.amount[idx]} />)}
        </div>
    )
}

export default ItemsList;