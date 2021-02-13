import toCurrency from '../../funcToCurrency.js';
import '../../App.css';

export default function ShopCard({el}) {
    return (
        <div className="shop-card">
            <h2>{el.name}</h2>
            <span>{el.color}</span>
            <img src = {el.img}></img>
            <button>ADD TO CART</button>
            <span>{el.price}</span>
        </div>
    )
}